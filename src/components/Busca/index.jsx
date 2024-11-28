import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const Busca = () => {
    const { busca } = useParams();
    const [filmes, setFilmes] = useState([]);
    const [series, setSeries] = useState([]);
    const apiKey = '49b16f807a3f235aa5a7ebe907022a77';
    const [carregamento, setCarregamento] = useState(false);

    useEffect(() => {
        buscar();
    }, [busca])

    const buscar = () => {
        buscarFilmes();
        buscarSeries();
    }

    const buscarFilmes = () => {
        setCarregamento(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busca}&language=pt-BR`)
            .then(response => response.json())
            .then(filmesAchados => {
                setFilmes(filmesAchados.results);
            })
    }

    const buscarSeries = () => {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${busca}&language=pt-BR`)
            .then(response => response.json())
            .then(seriesAchadas => {
                setSeries(seriesAchadas.results);
            })
            .finally(() => {
                setCarregamento(false);
            })
    }

    if (filmes.length > 0 && series.length > 0) {
        return (
            <>
                <h1 className="titulo">Resultados para: <span className="busca">{busca}</span></h1>

                <main>
                    <div className="container">
                        {carregamento &&
                            <div className="carregamento">
                                <div className="bolinha"></div>
                            </div>
                        }

                        {filmes.map(filme => {
                            return (
                                <Card poster={filme.poster_path} titulo={filme.title} nota={(filme.vote_average).toFixed(1)} id={filme.id} filme={true} />
                            )
                        })}

                        {series.map(series => {
                            return (
                                <Card poster={series.poster_path} titulo={series.name} nota={(series.vote_average).toFixed(1)} id={series.id} filme={false} />
                            )
                        })}
                    </div>
                </main>
            </>
        )
    } else {
        return (
            <>
                <h1 className="titulo">Resultados para: <span className="busca">{busca}</span></h1>

                <main>
                    <div className="container">
                        <h1 className="erro">
                            <i className="fa-solid fa-face-sad-tear"></i>
                            Não possuímos títulos com esse nome!
                        </h1>
                    </div>
                </main>
            </>
        )
    }
}

export default Busca;