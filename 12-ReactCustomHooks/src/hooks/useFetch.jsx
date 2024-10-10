import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    console.log(url)
    const [data, setData] = useState(
        {
            data: null,
            isLoading: true,
            hasError: null
        }
    );
    

    useEffect(() => {
        doFetch();
    }, [url]);

    const doFetch = async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setData({
                data: null,
                isLoading: false,
                hasError: error
            });
        }
    };
    
    return {...data};

};
