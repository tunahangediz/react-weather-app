import { useState, useEffect } from "react";

function useFetch(api, city) {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(api)
            .then((response) => {
                // Hata verirse uygulamanın çökmemesi için response kontorlü yapılmalı
                if (!response.ok) {
                    throw Error("Data not fetched");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setPending(false);
                setError(false);
            })
            .catch((err) => {
                setError(true);
                setPending(true);
                console.error(err);
            });
        return () => {
            console.log("Cleaned fetch");
        };
    }, [city]);
    return { data, isPending, error };
}

export default useFetch;
