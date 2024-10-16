export const TodoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] ADD':
            return [...initialState, action.payload];
        case '[TODO] DELETE':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] TOGGLE':
            return initialState.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        default:
            return initialState;
    }
}