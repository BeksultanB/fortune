function shuffleArray(array: any) {
    let arrayCopy = [...array]
    let n = arrayCopy.length
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    return arrayCopy
}

export default shuffleArray
