import axios from "axios"
import { useEffect, useState } from "react"
import { RAPID_KEY } from '@env'

const apiKey = RAPID_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setLoading(true);
        
        try {
            const response = await axios.request(options);
            setData(response.data.data);

        } catch (error) {
            setError(error)
            alert('There is an error.')
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

}