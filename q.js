const genBtn = document.getElementById('gen-q')
const t1 = document.getElementById('t1')
const timeD = document.getElementById('timeD')
const ansD = document.getElementById('ansD')
const ansS = document.getElementById('ansS')
const tbtn = document.getElementById('tbtn')
const qname = document.getElementById('qname')
const nextPrevBtn = document.getElementById('next-prev-btn')

const { type } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
})

const genRandom = (max, min) => {
    var random = new Random()
    return random.integer(min, max)
}

const parseSign = (num) => {
    const i = genRandom(2, 1)

    const sign = i == 1 ? '-' : '+'
    return `${sign}${num}`
}

const parseSign2 = (num) => {
    if (num < 0) {
        return `${num}`
    } else {
        return `+${num}`
    }
}

const divObj = {
    1: {
        min: 10000,
        max: 52000,
    },
    2: {
        min: 4000,
        max: 32000,
    },
    3: {
        min: 3000,
        max: 25000,
    },
    4: {
        min: 2500,
        max: 20000,
    },
    5: {
        min: 1700,
        max: 16000,
    },
    6: {
        min: 1500,
        max: 14000,
    },
    7: {
        min: 1300,
        max: 12000,
    },
    8: {
        min: 1200,
        max: 11000,
    },
    9: {
        min: 1100,
        max: 10000,
    },
}

const qTitle = {
    1: 'Sum of two squares of two two digit number | (0-9)',
    2: 'Sum of three products of two two digit number | (0-5)',
    3: 'Square of three digit number | (0-9)',
    4: 'Mutiplication of 1000 + bichlam (Bichlam +ve and not > 10)',
    5: 'Mutiplication of three two digit number | (0-5)',
    6: 'Mutiplication of Quadratic Equation | (0-9)',
    7: 'Sum of products of linear equations | (0-5)',
    8: 'Divisiblity test by 19,29,39,...,99 (6 digit number)',
    9: 'Extra Round (Time 1m 5s, 5s for writing question) - Mutiplication of two 4 digit numbers | (0-9)',
    10: 'Extra Round (Time 1m 5s, 5s for writing question) - Square root of six digit number (not a perfect square) (to the 2nd place in decimal)',
    11: 'Extra Round (Time 1m 5s, 5s for writing question) - Divide 6 digit number by 2 digit number (flag more than 5) (solution till 2nd place in decimal)',
    12: 'Question based on Numbers (based on divisibility of 9, 7 digit number)<br />\n(a) What will be the remainder when the number is divided by 9?\n(b) What is the least amount to add to the number so that the number is divisible by 9?\n(c) What is the least amount to substract to the number so that the number is divisible by 9?',
    13: 'Addition and substraction mixed, numbers of three digit, one digit of the three will be negative',
    14: 'Difference of two four digit number',
    15: 'Mutiplication with 999 of theee digit number',
    16: 'Multiplication two 2 digit number in which digit at tens place is same and sum of digits at ones place is 10',
    17: 'Mutiplication of two two digit number (digit greater than 5)',
    18: 'Mutiplication of two three digit number, base 100, deviation postive and not greater than 10',
    19: 'Mutiplication of two three digit number | (0-5)',
    20: 'Extra round : Mutiplication of two 3 digit numbers | (0-9)',
    21: 'Extra round : Difference of two fraction | numerator and denomenator not greater than 9',
    22: 'Extra round : Sum of products of two 2 digit number | (0-5)',
    23: 'Mutiplication of two 4 digit numbers | (0-5)',
    24: 'Multiplication of two four digit number, base 1000, sum of deviation not more than 30, deviation +ve and -ve',
    25: 'Difference of square of two number whose sum is 99',
    26: 'Square of number, base 1000, deviation not more than 35',
    27: 'Square of three digit number | (0-5)',
    28: 'Square root of 5 digit perfect square number',
    29: 'Cube root of six digit perfect cube number',
    30: 'Multiplication of two quadratic equations (0-5)',
    31: 'Extra Round (Time 1m 5s, 5s for writing question) : Divide 5 digit number by 2 digit number (flag not more than 5) (find quetient and remainder)',
    32: 'Extra Round (Time 1m 5s, 5s for writing question) : Square root of eight digit number (perfect square)',
    33: 'Extra Round (Time 1m 5s, 5s for writing question) : Multiplication of three two digit number | (0-5)',
}

let tIndex = 0

const trackTime = (answer) => {
    let time = 30

    ansS.innerHTML = answer
    ansS.classList.add('d-none')

    ansD.innerText = ''

    clearInterval(tIndex)
    tIndex = setInterval(() => {
        if (time > 0) {
            time--
            timeD.innerText = time
        }

        if (time == 0) {
            ansS.innerText = ''
            ansS.classList.add('d-none')
            ansD.innerHTML = answer
        }
    }, 1000)
}

const trackTime2 = (answer) => {
    let time = 65

    ansS.innerText = answer
    ansS.classList.add('d-none')

    ansD.innerText = ''

    clearInterval(tIndex)
    tIndex = setInterval(() => {
        if (time > 0) {
            time--
            timeD.innerText = time
        }

        if (time == 0) {
            ansS.innerText = ''
            ansS.classList.add('d-none')
            ansD.innerText = answer
        }
    }, 1000)
}

genBtn.addEventListener('click', (e) => {
    if (type == 1) {
        const num1 = genRandom(99, 11)
        const num2 = genRandom(99, 11)

        const answer = num1 ** 2 + num2 ** 2

        t1.classList.remove('d-none')
        t1.querySelector(
            '.card-body'
        ).innerHTML = `<h3>(${num1})² + (${num2})²</h3>`

        trackTime(answer)
    }

    if (type == 2) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)
        const d7 = genRandom(5, 1)
        const d8 = genRandom(5, 1)
        const d9 = genRandom(5, 1)
        const d10 = genRandom(5, 1)
        const d11 = genRandom(5, 1)
        const d12 = genRandom(5, 1)

        const num1 = `${d1}${d2}`
        const num2 = `${d3}${d4}`
        const num3 = `${d5}${d6}`
        const num4 = `${d7}${d8}`
        const num5 = `${d9}${d10}`
        const num6 = `${d11}${d12}`

        const answer = num1 * num2 + num3 * num4 + num5 * num6

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1} <span class="px-4"></span> ${num3} <span class="px-4"></span> ${num5}</h3>
        <h3>${num2} <span class="px-4"></span> ${num4} <span class="px-4"></span> ${num6}</h3>
        `

        trackTime(answer)
    }

    if (type == 3) {
        const num = genRandom(999, 100)

        const answer = num ** 2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>(${num})²</h3>`

        trackTime(answer)
    }

    if (type == 4) {
        const num1 = 1000 + genRandom(10, 1)
        const num2 = 1000 + genRandom(10, 1)
        const num3 = 1000 + genRandom(10, 1)

        const answer = num1 * num2 * num3

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        <h3>${num3}</h3>
        `

        trackTime(answer)
    }

    if (type == 5) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)

        const num1 = parseInt(`${d1}${d2}`)
        const num2 = parseInt(`${d3}${d4}`)
        const num3 = parseInt(`${d5}${d6}`)

        const answer = num1 * num2 * num3

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        <h3>${num3}</h3>
        `

        trackTime(answer)
    }

    if (type == 6) {
        const d1 = parseSign(genRandom(9, 1))
        const d2 = parseSign(genRandom(9, 1))
        const d3 = parseSign(genRandom(9, 1))
        const d4 = parseSign(genRandom(9, 1))
        const d5 = parseSign(genRandom(9, 1))
        const d6 = parseSign(genRandom(9, 1))

        const i1 = parseInt(d1)
        const i2 = parseInt(d2)
        const i3 = parseInt(d3)
        const i4 = parseInt(d3)
        const i5 = parseInt(d4)
        const i6 = parseInt(d6)

        const ct = parseSign2(i3 * i6)
        const cx = parseSign2(d2 * d6 + d5 * d3)
        const cxs = parseSign2(d1 * d6 + d3 * d4 + d2 * d5)
        const cxc = parseSign2(d1 * d5 + d4 * d2)
        const cxb = parseSign2(d1 * d4)

        const answer = `${cxb}x⁴ ${cxc}x³ ${cxs}x² ${cx}x ${ct}`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${d1}x² ${d2}x ${d3}</h3>
        <h3>${d4}x² ${d5}x ${d6}</h3>
        `

        trackTime(answer)
    }

    if (type == 7) {
        const d1 = parseSign(genRandom(5, 1))
        const d2 = parseSign(genRandom(5, 1))
        const d3 = parseSign(genRandom(5, 1))
        const d4 = parseSign(genRandom(5, 1))
        const d5 = parseSign(genRandom(5, 1))
        const d6 = parseSign(genRandom(5, 1))
        const d7 = parseSign(genRandom(5, 1))
        const d8 = parseSign(genRandom(5, 1))

        const i1 = parseInt(d1)
        const i2 = parseInt(d2)
        const i3 = parseInt(d3)
        const i4 = parseInt(d3)
        const i5 = parseInt(d4)
        const i6 = parseInt(d6)
        const i7 = parseInt(d7)
        const i8 = parseInt(d8)

        const ct = parseSign2(d2 * d4 + d6 * d8)
        const cx = parseSign2(d5 * d8 + d7 * d6 + d1 * d4 + d3 * d2)
        const cxs = parseSign2(d1 * d3 + d5 * d7)

        const answer = `${cxs}x² ${cx}x ${ct}`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${d1}x ${d2} <span class="px-4"></span> ${d5}x ${d6}</h3>
        <h3>${d3}x ${d4} <span class="px-4"></span> ${d7}x ${d8}</h3>
        `

        trackTime(answer)
    }

    if (type == 8) {
        const ion = genRandom(2, 1)

        let answer
        let divident
        let divisor

        if (ion == 1) {
            divident = genRandom(999999, 100000)
            const d = genRandom(9, 1)
            divisor = `${d}9`

            if (divident % divisor == 0) {
                answer = 'Yes'
            } else {
                //5,43,210
                const str = `${divident}`
                const arr = str.split('').reverse()
                const f = d + 1

                let r = 0
                arr.forEach((dig, i) => {
                    if (i == 5) {
                        answer = `No, last number ${r}`
                        return
                    }
                    if (i == 0) {
                        r = `${parseInt(dig * f) + parseInt(arr[1])}`
                    } else {
                        if (r < 10) {
                            r = `${r * f + parseInt(arr[i + 1])}`
                        } else {
                            const rStr = `${r}`
                            const rArr = r.split('').reverse()
                            r = `${
                                parseInt(rArr[0] * f) +
                                parseInt(rArr[1]) +
                                parseInt(arr[i + 1])
                            }`
                        }
                    }
                })

                //if (r1 < 10) {}
            }
        } else {
            const d = genRandom(9, 1)
            divisor = `${d}9`

            const m = genRandom(divObj[d].max, divObj[d].min)
            divident = m * divisor

            answer = 'Yes'
        }

        t1.classList.remove('d-none')
        t1.querySelector(
            '.card-body'
        ).innerHTML = `<h3>${divident} ÷ ${divisor}<h3>`
        trackTime(answer)
    }

    if (type == 9) {
        const num1 = genRandom(9999, 1000)
        const num2 = genRandom(9999, 1000)

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `

        trackTime2(answer)
    }

    if (type == 10) {
        const genIs = () => {
            const num = genRandom(999999, 100000)

            const squareRoot = Math.sqrt(num).toString().split('.')

            if (!squareRoot[1] || squareRoot[1].length < 2) {
                return genIs()
            } else {
                return {
                    num,
                    squareRoot: `${squareRoot[0]}.${squareRoot[1].charAt(
                        0
                    )}${squareRoot[1].charAt(1)}`,
                }
            }
        }

        const { num, squareRoot } = genIs()

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>√( ${num} )</h3>
        `

        trackTime2(squareRoot)
    }

    if (type == 11) {
        const num = genRandom(999999, 100000)

        const d1 = genRandom(9, 1)
        const d2 = genRandom(9, 6)

        const divisor = `${d1}${d2}`

        const q = num / divisor
        const qArr = q.toString().split('.')
        let answer
        if (!qArr[1]) {
            answer = `${q}.00`
        } else {
            answer = `${qArr[0]}.${qArr[1].charAt(0)}${qArr[1].charAt(1)}`
        }

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num} ÷ ${divisor}</h3>
        `

        trackTime2(answer)
    }

    if (type == 12) {
        const genNumber = () => {
            const n = genRandom(9999999, 1000000)

            if (n % 9 == 0) {
                return genNumber()
            }
            return n
        }

        const number = genNumber()

        const remainder = number % 9
        const add = 9 - remainder
        const answer = `Remainder is ${remainder}, Add ${add} or substract ${remainder} to make number divisible.`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>${number} ÷ 9<h3>`
        trackTime(answer)
    }

    if (type == 13) {
        let num1 = genRandom(999, 100)
        let num2 = genRandom(999, 100)
        let num3 = -genRandom(num1 + num2 < 999 ? num1 + num2 : 999, 100)

        const negIndex = genRandom(2, 1)

        if (negIndex == 1) {
            t1.querySelector('.card-body').innerHTML = `<h3>${num1}${parseSign2(
                num3
            )}${parseSign2(num2)}</h3>`
        }

        if (negIndex == 2) {
            t1.querySelector('.card-body').innerHTML = `<h3>${num1}${parseSign2(
                num2
            )}${parseSign2(num3)}</h3>`
        }

        const answer = num1 + num2 + num3

        t1.classList.remove('d-none')
        trackTime(answer)
    }

    if (type == 14) {
        const num1 = genRandom(9999, 1000)
        const num2 = genRandom(num1, 1000)

        const answer = num1 - num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1} - ${num2}</h3>
        `

        trackTime(answer)
    }

    if (type == 15) {
        const num = genRandom(999, 100)

        const answer = 999 * num

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num}</h3>
        <h3>999</h3>
        `
        trackTime(answer)
    }

    if (type == 16) {
        const numAtTens = genRandom(9, 1)
        const d1 = genRandom(9, 1)
        const d2 = 10 - d1

        const num1 = `${numAtTens}${d1}`
        const num2 = `${numAtTens}${d2}`

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `
        trackTime(answer)
    }

    if (type == 17) {
        const d1 = genRandom(9, 6)
        const d2 = genRandom(9, 6)
        const d3 = genRandom(9, 6)
        const d4 = genRandom(9, 6)

        const num1 = `${d1}${d2}`
        const num2 = `${d3}${d4}`

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `
        trackTime(answer)
    }

    if (type == 18) {
        const d1 = genRandom(10, 1)
        const d2 = genRandom(10, 1)

        const num1 = 100 + d1
        const num2 = 100 + d2

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `
        trackTime(answer)
    }

    if (type == 19) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)

        const num1 = `${d1}.${d2}${d3}`
        const num2 = `${d4}.${d5}${d6}`

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `
        trackTime(answer)
    }

    if (type == 20) {
        const num1 = genRandom(999, 100)
        const num2 = genRandom(999, 100)

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `

        trackTime(answer)
    }

    if (type == 21) {
        const genQ = () => {
            const d1 = genRandom(9, 1)
            const d2 = genRandom(9, 1)
            const d3 = genRandom(9, 1)
            const d4 = genRandom(9, 1)

            /*
             d1/d2 - d3/d4
            */

            const numerator = d1 * d4 - d2 * d3

            if (numerator < 1) {
                return genQ()
            }

            const denomenator = d2 * d4

            return { d1, d2, d3, d4, numerator, denomenator }
        }

        const { d1, d2, d3, d4, numerator, denomenator } = genQ()

        const answer = `<sup>${numerator}</sup>&frasl;<sub>${denomenator}</sub>`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3><sup>${d1}</sup>&frasl;<sub>${d2}</sub> - <sup>${d3}</sup>&frasl;<sub>${d4}</sub></h3>
        `

        trackTime(answer)
    }

    if (type == 22) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)
        const d7 = genRandom(5, 1)
        const d8 = genRandom(5, 1)

        const num1 = `${d1}${d2}`
        const num2 = `${d3}${d4}`
        const num3 = `${d5}${d6}`
        const num4 = `${d7}${d8}`

        const answer = num1 * num2 + num3 * num4

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1} <span class="px-4"></span> ${num3}</h3>
        <h3>${num2} <span class="px-4"></span> ${num4}</h3>
        `

        trackTime(answer)
    }

    if (type == 23) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)
        const d7 = genRandom(5, 1)
        const d8 = genRandom(5, 1)

        const num1 = `${d1}${d2}${d3}${d4}`
        const num2 = `${d5}${d6}${d7}${d8}`

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `

        trackTime(answer)
    }

    if (type == 24) {
        const d1 = genRandom(30, 1)

        const fD2 = () => {
            const d = genRandom(30, 1)

            if (d1 + d < 31) {
                return d
            } else {
                return fD2()
            }
        }

        const d2 = fD2()

        let num1 = 1000 + d1
        let num2 = 1000 + d2

        if (genRandom(2, 1) == 1) {
            num1 = 1000 + d1
            num2 = 1000 + d2
        } else {
            num1 = 1000 - d1
            num2 = 1000 - d2
        }

        const answer = num1 * num2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        `

        trackTime(answer)
    }

    if (type == 25) {
        const num1 = genRandom(89, 50)
        const num2 = 99 - num1

        const answer = num1 ** 2 - num2 ** 2

        t1.classList.remove('d-none')
        t1.querySelector(
            '.card-body'
        ).innerHTML = `<h3>(${num1})² - (${num2})²</h3>`

        trackTime(answer)
    }

    if (type == 26) {
        const num = genRandom(1035, 1001)
        const answer = num ** 2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>(${num})²</h3>`

        trackTime(answer)
    }

    if (type == 27) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)

        const num = `${d1}${d2}${d3}`

        const answer = num ** 2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>(${num})²</h3>`

        trackTime(answer)
    }

    if (type == 28) {
        // 100 - 316
        const answer = genRandom(316, 100)

        const num = answer ** 2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>√( ${num} )</h3>
        `

        trackTime(answer)
    }

    if (type == 29) {
        // 47-99
        const answer = genRandom(99, 47)

        const num = answer ** 3

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>³√( ${num} )</h3>
        `

        trackTime(answer)
    }

    if (type == 30) {
        const d1 = parseSign(genRandom(5, 1))
        const d2 = parseSign(genRandom(5, 1))
        const d3 = parseSign(genRandom(5, 1))
        const d4 = parseSign(genRandom(5, 1))
        const d5 = parseSign(genRandom(5, 1))
        const d6 = parseSign(genRandom(5, 1))

        const i1 = parseInt(d1)
        const i2 = parseInt(d2)
        const i3 = parseInt(d3)
        const i4 = parseInt(d3)
        const i5 = parseInt(d4)
        const i6 = parseInt(d6)

        const ct = parseSign2(i3 * i6)
        const cx = parseSign2(d2 * d6 + d5 * d3)
        const cxs = parseSign2(d1 * d6 + d3 * d4 + d2 * d5)
        const cxc = parseSign2(d1 * d5 + d4 * d2)
        const cxb = parseSign2(d1 * d4)

        const answer = `${cxb}x⁴ ${cxc}x³ ${cxs}x² ${cx}x ${ct}`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${d1}x² ${d2}x ${d3}</h3>
        <h3>${d4}x² ${d5}x ${d6}</h3>
        `

        trackTime(answer)
    }

    if (type == 31) {
        const num = genRandom(99999, 10000)
        const d1 = genRandom(9, 1)
        const d2 = genRandom(5, 1)

        const divisor = `${d1}${d2}`

        const remainder = num % divisor
        const q = (num - remainder) / divisor

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>${num} ÷ ${divisor}<h3>`
        trackTime2(`Quotient: ${q}, Remainder: ${remainder}`)
    }

    if (type == 32) {
        // 3,163-9999
        const answer = genRandom(9999, 3163)

        const num = answer ** 2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>√( ${num} )</h3>
        `

        trackTime2(answer)
    }

    if (type == 33) {
        const d1 = genRandom(5, 1)
        const d2 = genRandom(5, 1)
        const d3 = genRandom(5, 1)
        const d4 = genRandom(5, 1)
        const d5 = genRandom(5, 1)
        const d6 = genRandom(5, 1)

        const num1 = parseInt(`${d1}${d2}`)
        const num2 = parseInt(`${d3}${d4}`)
        const num3 = parseInt(`${d5}${d6}`)

        const answer = num1 * num2 * num3

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1}</h3>
        <h3>${num2}</h3>
        <h3>${num3}</h3>
        `

        trackTime2(answer)
    }
})

qname.innerText = qTitle[parseInt(type)]

tbtn.addEventListener('click', () => ansS.classList.remove('d-none'))

// Next previous button
if (type == 1 || type == 12 || type == 23) {
    nextPrevBtn.innerHTML = `<a href="#" class="btn btn-secondary disabled">Previous</a>
    <a href="/question.html?type=${
        parseInt(type) + 1
    }" class="btn btn-primary">Next</a>`
} else if (type == 11 || type == 22 || type == 33) {
    nextPrevBtn.innerHTML = `<a href="/question.html?type=${
        parseInt(type) - 1
    }" class="btn btn-secondary">Previous</a>
    <a href="/question.html?type=${
        parseInt(type) - 10
    }" class="btn btn-primary">Restart</a>`
} else {
    nextPrevBtn.innerHTML = `<a href="/question.html?type=${
        parseInt(type) - 1
    }" class="btn btn-secondary">Previous</a>
    <a href="/question.html?type=${
        parseInt(type) + 1
    }" class="btn btn-primary">Next</a>`
}
