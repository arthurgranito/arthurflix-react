import { Link } from "react-router-dom";

const Card = (props) => {
    if (props.filme) {
        return (
            <>
                <Link to={`/detalhesfilmes/${props.id}`} className="linkCard">
                    <div className="card">
                        {props.poster != null && <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.titulo} />}

                        {props.poster == null && <img src={`https://via.placeholder.com/220/ffffff?text=${props.titulo}`} />}
                        <h3>{props.titulo}</h3>
                        <p>
                            <i className="fa-solid fa-star"></i>
                            <p>{props.nota}</p>
                        </p>
                        <button>
                            Ver Detalhes
                        </button>
                    </div>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <Link to={`/detalhesseries/${props.id}`} className="linkCard">
                    <div className="card">
                        {props.poster != null && <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.titulo} />}

                        {props.poster == null && <img src={`https://via.placeholder.com/220/ffffff?text=${props.titulo}`} />}
                        <h3>{props.titulo}</h3>
                        <p>
                            <i className="fa-solid fa-star"></i>
                            <p>{props.nota}</p>
                        </p>
                        <button>
                            Ver Detalhes
                        </button>
                    </div>
                </Link>
            </>
        )
    }
}

export default Card;