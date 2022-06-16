import React, {useEffect, useState} from 'react';


function Zadanie1() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {


        setLoading(true);
        fetch(`https://randomuser.me/api`)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);

    }, []);

    if (loading) return <h1>loading...</h1>
    if (error) return <pre>{JSON.stringify(error)}</pre>
    if (data) {
        return (
            <form style={{boxSizing:"border-box",
                            padding:"1em 50em"}}>
                <div>
                    <div>
                        <img className="photo"
                             src={data.results[0].picture.large}
                             style={{width: 300}}

                        />
                    </div>

                    <div style={{display:"inline"}}>
                        <h2>
                            {JSON.stringify(data.results[0].name.title)}
                            {JSON.stringify(data.results[0].name.first)}
                            {JSON.stringify(data.results[0].name.last)}
                        </h2>
                        <h2>
                            from
                        </h2>
                        <h2>
                            {JSON.stringify(data.results[0].location.country)}
                        </h2>
                        <h2>
                            lives in city:
                        </h2>
                        <h2>
                            {JSON.stringify(data.results[0].location.city)}
                        </h2>
                        <h2>
                            in state
                        </h2>
                        <h2>
                            {JSON.stringify(data.results[0].location.state)}
                        </h2>


                    </div>
                    <div style={{display: "flex"}}>
                        <h2>street</h2>
                        <h2>
                            {JSON.stringify(data.results[0].location.street.name)}
                        </h2>
                        <h2>number:</h2>
                        <h2>
                            {JSON.stringify(data.results[0].location.street.number)}
                        </h2>
                    </div>
                </div>
                <button><h3>next!</h3></button>
            </form>
        )
    }
};

export default Zadanie1;