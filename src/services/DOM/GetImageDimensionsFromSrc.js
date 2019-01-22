export default src => new Promise((resolve, _) => {
    const element = new Image()

    element.onload = () => resolve({width: element.width, height: element.height})

    element.src = src
})