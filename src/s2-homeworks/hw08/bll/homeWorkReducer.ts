import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


const initialState: UserType[] = []

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up' ? state.sort((a, b) => a.name > b.name ? 1 : -1) : state.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortAC = (payload: 'up' | 'down') => {
    return {
        type: 'sort',
        payload
    } as const
}

export const checkAC = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}