import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { asyncDecrement, asyncIncrement, decrement, increment, changeTheme } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncIncBtn = document.getElementById('async-inc')
const asyncDecBtn = document.getElementById('async-dec')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
)

addBtn.addEventListener('click', () => {
   store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncIncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

asyncDecBtn.addEventListener('click', () => {
    store.dispatch(asyncDecrement())
})

store.subscribe(() =>{
    const state = store.getState()

    counter.textContent = state.counter
    document.body.className = state.theme.value
})

store.dispatch({type: '__INIT_APP__'})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
    store.dispatch(changeTheme(newTheme))
})

