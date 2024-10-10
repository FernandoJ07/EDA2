import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

export const MultipleCustomHooks = ({value}) => {
    const {counter, handleAdd} = useCounter(value);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon-form/${counter}/`);
    return (
        <div>
            <h1>Poke api</h1>
            <hr />
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : hasError ? (
                    <p>Error: {hasError}</p>
                ) : data && (
                    <div>
                        <p>{data.name}</p>
                        <img width="200px" height="200px" src={data.sprites.front_default} alt={data.name} />
                    </div>
                )
            }
            <button onClick={handleAdd}>Next pokemon</button>
        </div>
    );
};