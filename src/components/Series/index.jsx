import { useState, useEffect } from "react";
import Card from "../Card";

const Series = () => {
    const [series, setSeries] = useState([]);
    const apiKey = '49b16f807a3f235aa5a7ebe907022a77';
    const [carregamento, setCarregamento] = useState(false)

    useEffect(() => {
        const buscarSeries = () => {
            setCarregamento(true);
            fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(seriesAchadas => {
                    setSeries(seriesAchadas.results);
                    console.log(seriesAchadas.results);
                })
                .finally(() => {
                    setCarregamento(false);
                })
        }

        buscarSeries()
    }, [])

    return (
        <>
            <h1 className="titulo">Séries</h1>

            <main>
                <div className="container">
                    {carregamento &&
                        <div className="carregamento">
                            <div className="bolinha"></div>
                        </div>
                    }

                    {series.map(serie => {
                        return (
                            <Card poster={serie.poster_path} titulo={serie.name} nota={(serie.vote_average).toFixed(1)} filme={false} id={serie.id}/>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Series;