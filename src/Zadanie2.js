import React, {useEffect, useState} from 'react';


function Zadanie2() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!data) return;

        setLoading(true);
        fetch(`www.themealdb.com/api/json/v1/1/categories.php`)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);

    }, []);

    if (loading) return <h1>loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (data) {
        return (
            <form>
                <div>
                    <pre>{JSON.stringify({data})}</pre>
                </div>
            </form>
        )
    }
};

export default Zadanie2;