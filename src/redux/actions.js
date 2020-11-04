import {CHANGE_THEME, DECREMENT, INCREMENT } from "./types"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}

export const asyncIncrement = () => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(increment())
        },1000)
    }
}

export const asyncDecrement = () => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(decrement())
        },1000)
    }
}