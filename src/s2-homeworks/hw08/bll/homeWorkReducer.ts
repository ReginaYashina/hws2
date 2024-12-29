import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


const initialState: UserType[] = []

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            console.log(newState)
            return action.payload === 'up' ? newState : newState.reverse()

        }
        case 'check': {
            return state.filter(u => u.age >= action.payload).reverse()
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