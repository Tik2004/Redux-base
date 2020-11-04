import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncIncBtn = document.getElementById('async-inc')
const asyncDecBtn = document.getElementById('async-dec')
const themeBtn = document.getElementById('theme')

let state = 0

function render() {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncIncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    },2000)
    render()
})

asyncDecBtn.addEventListener('click', () => {
    setTimeout(() => {
        state--
        render()
    },2000)
    render()
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()