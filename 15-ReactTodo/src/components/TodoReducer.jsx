export const TodoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] ADD':
            return [...initialState, action.payload];
        case '[TODO] DELETE':
            return initialState.filter(todo => todo.id !== action.payload);
        default:
            return initialState;
    }
}
