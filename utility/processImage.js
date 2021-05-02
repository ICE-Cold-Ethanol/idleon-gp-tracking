import { createWorker } from 'tesseract.js'
import ijs from 'image-js'

const processImage = async (image, cropSetting, callback) => {
    // load image into ijs
    const arrayBuffer = await image.arrayBuffer()
    const original = await ijs.load(arrayBuffer)

    // cropped name image
    const croppedName = original.crop({
        x: (cropSetting.nameCrop.x.value / 100) * original.width,
        y: (cropSetting.nameCrop.y.value / 100) * original.height,
        width: (cropSetting.nameCrop.width.value / 100) * original.width,
        height: (cropSetting.nameCrop.height.value / 100) * original.height,
    })

    // enhanced name image
    const enhancedName = croppedName.invert().grey().mask({ threshold: 0.4 })

    // cropped gp image
    const croppedGp = original.crop({
        x: (cropSetting.gpCrop.x.value / 100) * original.width,
        y: (cropSetting.gpCrop.y.value / 100) * original.height,
        width: (cropSetting.gpCrop.width.value / 100) * original.width,
        height: (cropSetting.gpCrop.height.value / 100) * original.height,
    })

    // enhanced gp image
    const enhancedGp = croppedGp.invert().grey().mask({ threshold: 0.4 })

    // convert output image to blob
    const [
        croppedNameBlob,
        nameEnhancedBlob,
        croppedGpBlob,
        gpEnhancedBlob,
    ] = await Promise.all([
        croppedName.toBlob(),
        enhancedName.toBlob(),
        croppedGp.toBlob(),
        enhancedGp.toBlob(),
    ])

    // bypass the bug in tesseract.js
    nameEnhancedBlob.name = ''
    gpEnhancedBlob.name = ''

    // set up worker
    const worker = createWorker({
        langPath: 'https://tessdata.projectnaptha.com/4.0.0_best',
        logger: (m) => console.log(m),
        errorHandler: (err) => console.error(err),
    })

    // set up worker
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')

    // get name ocr result
    const nameOCR = await worker.recognize(nameEnhancedBlob)
    const nameText = nameOCR.data.lines.map((line) => line.text.trim())

    // get gp ocr result
    const gpOCR = await worker.recognize(gpEnhancedBlob)
    const gpText = gpOCR.data.lines.map((line) => line.text.trim())

    // restructure result
    const outputText = nameText.map((name, i) => {
        return { name, gp: gpText[i] }
    })

    // terminate the worker
    await worker.terminate()

    // callback
    callback()

    // return result
    return { outputText, nameImg: croppedNameBlob, gpImg: croppedGpBlob }
}

export default processImage
