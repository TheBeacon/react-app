const initialState = {
    visible: true
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "CHANGE":
            let newState = { ...state }
            newState.visible = !newState.visible
            return newState

        default:
            return state
    }
}
