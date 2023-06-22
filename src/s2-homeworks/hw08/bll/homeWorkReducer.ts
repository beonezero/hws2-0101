import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a,b) => {
                   if (action.payload === 'up'){
                       if (a.name > b.name) {return 1}
                       if (a.name < b.name) {return -1}
                   } else if (action.payload === 'down') {
                       if (a.name < b.name) {return 1}
                       if (a.name > b.name) {return -1}
                   } return 0
                } )
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
