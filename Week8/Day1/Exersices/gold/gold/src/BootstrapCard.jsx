import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapCard = () => {
    const [celebrities, setCelebrities] = React.useState([]);

    const getData = async () => {
        try {
            const resp = await fetch("dataCelebrities.json");
            const json = await resp.json();
            return json;
        } catch (error) {
            console.error("Error fetching data: ", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setCelebrities(data);
        };
        fetchData();
    }, []);

    return (
        <>
            {celebrities.map((celeb) => (
                <div className="card m-5" style={{ width: '30rem' }}>
                    <img className="card-img-top" src={celeb.imageUrl} alt={`${celeb.name} image`} />
                    <div className="card-body">
                        <h5 className="card-title">{celeb.name}</h5>
                        <p className="card-text">{celeb.description}</p>
                        <a href={celeb.buttonUrl} className="btn btn-primary">Go to Wikipedia</a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BootstrapCard;
