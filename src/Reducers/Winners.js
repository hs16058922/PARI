const data = {
    first_ten: [],
    second_twenty: [],
    third_thirty: [],
    fourth_fifty: [],
    fifth_fifty: [],
    sixth_fifty: [],
    seventh_fifty: []
}


export default (state = data, action) => {
    switch (action.type) {
        case "SET_WINNERS":
            return state = action.winners;
        case 'ADD_FIRST_WINNER':
            return { ...state, first_ten: [...state.first_ten, action.winner] }
        case 'ADD_SECOND_WINNER':
            return { ...state, second_twenty: [...state.second_twenty, action.winner] }
        case 'ADD_THIRD_WINNER':
            return { ...state, third_thirty: [...state.third_thirty, action.winner] }
        case 'ADD_FOURTH_WINNER':
            return { ...state, fourth_fifty: [...state.fourth_fifty, action.winner] }
        case 'ADD_FIFTH_WINNER':
            return { ...state, fifth_fifty: [...state.fifth_fifty, action.winner] }
        case 'ADD_SIXTH_WINNER':
            return { ...state, sixth_fifty: [...state.sixth_fifty, action.winner] }
        case 'ADD_SEVENTH_WINNER':
            return { ...state, seventh_fifty: [...state.seventh_fifty, action.winner] }
        default:
            return state
    }
}

