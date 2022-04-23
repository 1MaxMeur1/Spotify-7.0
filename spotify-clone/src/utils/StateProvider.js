import {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext()
export const useStateProvider = () => useContext(StateContext)

export const StateProvider = ({children, initialState, reducer}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)