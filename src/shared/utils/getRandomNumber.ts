function getRandomNumber(min: number, max: number) {
    const numbers = Array.from({ length: max - min + 1 }, (v, k) => k + min)

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
    }

    return numbers[0]
}

export default getRandomNumber