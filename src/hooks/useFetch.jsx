import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        // fetch data from API 
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false); // after fetching the data the setLoading state will be false
                setData(res);   // data will be stored in that with the help of setState
            })
            .catch((err) => {
                setLoading(false);   // if api was not fetch data properly so the catch block will show the error 
                setError("Something went wrong!");
            });
    }, [url]);   // sending dependencies array every time when the url value changes this useeffect will call automatically

    return { data, loading, error };
};

export default useFetch;
