import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetalhesFilmes = () => {
    const { id } = useParams();
    const apiKey = '49b16f807a3f235aa5a7ebe907022a77';
    const [filme, setFilme] = useState({});
    const [nota, setNota] = useState('');
    const [generos, setGeneros] = useState([]);
    const [carregamento, setCarregamento] = useState(false)

    useEffect(() => {
        const buscarDetalhes = () => {
            setCarregamento(true)
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
                .then(response => response.json())
                .then(filme => {
                    setFilme(filme);
                    setNota(filme.vote_average.toFixed(1));
                    setGeneros(filme.genres.map(genre => genre.name));
                })
                .finally(() => {
                    setCarregamento(false)
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
                    {filme.poster_path != null && <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />}

                    {filme.poster_path == null && <img src={`https://via.placeholder.com/100/ffffff?text=${filme.title}`} />}


                    <div className="dados">
                        <div className="cima">
                            <h1>{filme.title}</h1>
                            <p>
                                <span className="negrito">Data de lançamento:</span>
                                {filme.release_date}
                            </p>
                            <p>
                                <span className="negrito">Duração:</span>
                                {filme.runtime} minutos
                            </p>
                            <p>
                                <span className="negrito">Gêneros:</span>
                                {generos.join(', ')}
                            </p>
                            <p className="avaliacao">
                                <i className="fa-solid fa-star"></i>
                                {nota}
                            </p>
                        </div>
                        <p className="description">
                            {filme.overview}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalhesFilmes;