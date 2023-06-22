import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            if(action.payload === "up") {
                return copyState.sort(function(a,b) {
                   if (a.name > b.name){
                       return 1
                   } else if (a.name < b.name) {
                       return -1
                   } else {
                       return 0
                   }
                })
            }
            if(action.payload === "down") {
                return copyState.sort(function(a,b) {
                    if (a.name < b.name){
                        return 1
                    } else if (a.name > b.name) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
