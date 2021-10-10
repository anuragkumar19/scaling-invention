const genBtn = document.getElementById('gen-q')
const t1 = document.getElementById('t1')
const timeD = document.getElementById('timeD')
const ansD = document.getElementById('ansD')
const ansS = document.getElementById('ansS')
const tbtn = document.getElementById('tbtn')


const {
    type
} = Qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

const genRandom = (max, min) => {
    return Math.floor((Math.random() * max) + min);
}

const parseSign = (num) => {
    const i = genRandom(2, 1)

    const sign = i == 1 ? '-': '+'
    return `${sign}${num}`
}

const parseSign2 = (num) => {
    if (num < 0) {
        return `${num}`
    } else {
        return `+${num}`
    }
}

let tIndex = 0

const trackTime = (answer) => {
    let time = 30

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

    },
        1000)
}

genBtn.addEventListener('click', (e) => {
    if (type == 1) {
        const num1 = genRandom(99, 11)
        const num2 = genRandom(99, 11)

        const answer = num1**2 + num2**2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>(${num1})² + (${num2})²</h3>`

        trackTime(answer)
    }

    if (type == 2) {
        const d1 = parseSign(genRandom(5, 1))
        const d2 = parseSign(genRandom(5, 1))
        const d3 = parseSign(genRandom(5, 1))
        const d4 = parseSign(genRandom(5, 1))
        const d5 = parseSign(genRandom(5, 1))
        const d6 = parseSign(genRandom(5, 1))
        const d7 = parseSign(genRandom(5, 1))
        const d8 = parseSign(genRandom(5, 1))

        const num1 = `${d1}${d2}`
        const num2 = `${d3}${d4}`
        const num3 = `${d5}${d6}`
        const num4 = `${d7}${d8}`

        const answer = (num1*num2) + (num3*num4)

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${num1} <span class="px-4"></span> ${num3}</h3>
        <h3>${num2} <span class="px-4"></span> ${num4}</h3>
        `

        trackTime(answer)
    }

    if (type == 3) {
        const num = genRandom(999, 100)

        const answer = num**2

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `<h3>(${num})²</h3>`

        trackTime(answer)
    }

    if (type == 4) {
        const num1 = 1000 + genRandom(10, 1)
        const num2 = 1000 + genRandom(10, 1)
        const num3 = 1000 + genRandom(10, 1)

        const answer = num1*num2*num3

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

        const answer = num1*num2*num3

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
        const cx = parseSign2((d2*d6) + (d5*d3))
        const cxs = parseSign2((d1*d6) + (d3*d4) + (d2*d5))
        const cxc = parseSign2((d1*d5) + (d4*d6))
        const cxb = parseSign2((d1*d4))

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

        const ct = parseSign2((d2*d4) + (d6*d8))
        const cx = parseSign2((d5*d8) + (d7*d6) + (d1*d4) + (d3*d2))
        const cxs = parseSign2((d1*d3)+(d5*d7))

        const answer = `${cxs}x² ${cx}x ${ct}`

        t1.classList.remove('d-none')
        t1.querySelector('.card-body').innerHTML = `
        <h3>${d1}x ${d2} <span class="px-4"></span> ${d5}x ${d6}</h3>
        <h3>${d3}x ${d4} <span class="px-4"></span> ${d7}x ${d8}</h3>
        `

        trackTime(answer)
    }
})

tbtn.addEventListener('click', () => ansS.classList.remove('d-none'))