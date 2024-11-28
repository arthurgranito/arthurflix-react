import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetalhesFilmes = () => {
    const { id } = useParams();
    const apiKey = '49b16f807a3f235aa5a7ebe907022a77';
    const [serie, setSerie] = useState({});
    const [nota, setNota] = useState('');
    const [carregamento, setCarregamento] = useState(false);
    const [generos, setGeneros] = useState([])

    useEffect(() => {
        const buscarDetalhes = () => {
            setCarregamento(true)
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(serie => {
                    setSerie(serie);
                    setNota(serie.vote_average.toFixed(1))
                    setGeneros(serie.genres.map(genre => genre.name))
                })
                .finally(() => {
                    setCarregamento(false);
                })
        };

        buscarDetalhes();
    }, [])

    return (
        <>
            <div className="containerDetalhes">
                {carregamento &&
                    <div className="carregamento">
                        <div className="bolinha"></div>
                    </div>
                }
                <div className="cardDetalhes">
                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
                    <div className="dados">
                        <div className="cima">
                            <h1>{serie.name}</h1>
                            <p>
                                <span className="negrito">Data de estréia:</span>
                                {serie.first_air_date}
                            </p>
                            <p>
                                <span className="negrito">Gêneros:</span>
                                {generos.join(', ')}
                            </p>
                            <p>
                                <span className="negrito">Duração do episódio:</span>
                                {serie.episode_run_time} minutos
                            </p>
                            <p>
                                <span className="negrito">Número de episósios:</span>
                                {serie.number_of_episodes}
                            </p>
                            <p>
                                <span className="negrito">Número de temporadas:</span>
                                {serie.number_of_seasons}
                            </p>
                            <p className="avaliacao">
                                <i className="fa-solid fa-star"></i>
                                <span className="negrito">{nota}</span>
                            </p>
                        </div>
                        <p className="description">{serie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalhesFilmes;