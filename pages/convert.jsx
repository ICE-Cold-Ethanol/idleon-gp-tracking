import clsx from 'clsx'
import { useState } from 'react'
import { getLayout } from '../components/layouts/MainLayout'

const Convert = () => {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState(
        'Not sure what to do? Go check the instruction section.'
    )
    const [state, setState] = useState('default')

    const onChangeHandle = (e) => {
        setInput(e.target.value)
    }

    const parseData = (input) => {
        // check empty input
        if (input === '') {
            setMessage(
                'Error: Raw data cannot be empty, please input the raw data first.'
            )
            setState('error')
            return ''
        }

        // try to parse the json
        let inputObject = {}

        try {
            inputObject = JSON.parse(input)
        } catch (error) {
            // json error
            setMessage(error.toString())
            setState('error')
            return ''
        }

        // extract the data object
        let dataObject = inputObject?.d?.b?.d

        if (!dataObject) {
            // no data object
            setMessage(
                'Error: Malformed raw data, please make sure you have extracted the correct data.'
            )
            setState('error')
            return ''
        }

        return dataObject
    }

    // change the output object to csv format string
    const toCSV = (outputObject) =>
        outputObject.map((line) => line.join(',')).join('\n')

    // set text to clipboard
    const toClipboard = async (text, message) => {
        await navigator.clipboard.writeText(text)

        setMessage(message)
        setState('success')
    }

    const onDataClickHandle = () => {
        const dataObject = parseData(input)

        // error in data
        if (!dataObject) {
            return
        }

        // get keys and extract gp value
        const todayString = new Date().toISOString().substr(0, 10)
        const outputObject = Object.keys(dataObject).map((key) => [
            todayString,
            key,
            dataObject[key]?.e,
        ])

        // write result into clipboard
        toClipboard(
            toCSV(outputObject),
            'Successfully convert to data entries, result is copied into your clipboard'
        )
    }

    const onNameClickHandle = () => {
        const dataObject = parseData(input)

        // error in data
        if (!dataObject) {
            return
        }

        // get keys and extract gp value
        const outputObject = Object.keys(dataObject).map((key) => [
            key,
            dataObject[key]?.a,
        ])

        // write result into clipboard
        toClipboard(
            toCSV(outputObject),
            'Successfully convert to name table, result is copied into your clipboard'
        )
    }

    return (
        <div className="flex flex-col items-center flex-grow p-8 gap-4">
            {/* heading */}
            <div className="text-2xl">Paste your raw data here</div>

            {/* input area */}
            <textarea
                className="flex-grow border-black border-4 resize-none w-full text-xl"
                placeholder="Your raw data here"
                value={input}
                onChange={onChangeHandle}
            ></textarea>

            {/* message text */}
            <div
                className={clsx('text-xl', {
                    'text-black': state === 'default',
                    'text-red-600': state === 'error',
                    'text-green-600': state === 'success',
                })}
            >
                {message}
            </div>

            {/* buttons */}
            <div className="flex justify-between w-full gap-8">
                <button className="btn flex-grow" onClick={onDataClickHandle}>
                    Get Data Entries
                </button>
                <button className="btn flex-grow" onClick={onNameClickHandle}>
                    Get Name Table
                </button>
            </div>
        </div>
    )
}

Convert.getLayout = getLayout

export default Convert
