const isCropValid = (cropState) => {
    return (
        cropState.x.value >= 0 &&
        cropState.y.value >= 0 &&
        cropState.width.value > 0 &&
        cropState.height.value > 0
    )
}

export default isCropValid
