import { useState } from "react";

export default function AddCategory({onAddCategory}) {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddCategory(inputValue);
        setInputValue('');
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input name="inputValue" value={inputValue} onChange={onInputChange} type="text" />
            <button type="submit">Guardar</button>
        </form>
            
        </>
    )
}