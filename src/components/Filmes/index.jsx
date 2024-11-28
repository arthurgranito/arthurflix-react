import { useState, useEffect } from "react";
import Card from "../Card";

const FilmesSeries = () => {
    const [filmes, setFilmes] = useState([]);
    const apiKey = '49b16f807a3f235aa5a7ebe907022a77';
    const [carregamento, setCarregamento] = useState(false);

    useEffect(() => {
        const buscarFilmes = () => {
            setCarregamento(true)
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(filmesAchados => {
                    setFilmes(filmesAchados.results);
                    console.log(filmesAchados.results);
                })
            .finally(() => {
                setCarregamento(false);
            })
        }

        buscarFilmes()
    }, [])

    return (
        <>
            <h1 className="titulo">Filmes</h1>

            <main>
                <div className="container">
                    {carregamento && 
                        <div className="carregamento">
                            <div className="bolinha"></div>
                        </div>
                    }

                    {filmes.map(filme => {
                        return (
                            <Card poster={filme.poster_path} titulo={filme.title} nota={(filme.vote_average).toFixed(1)} id={filme.id} filme={true}/>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default FilmesSeries;