import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.titulo} />
            <h3>{props.titulo}</h3>
            <p>
                <i className="fa-solid fa-star"></i>
                <p>{props.nota}</p>
            </p>

            {
                props.filme &&
                <Link to={`/detalhesfilmes/${props.id}`}>
                    <button>
                        Ver Detalhes
                    </button>
                </Link>
            }

            {
                !props.filme && 
                <Link to={`/detalhesseries/${props.id}`}>
                    <button>
                        Ver Detalhes
                    </button>
                </Link>
            }
        </div>
    )
}

export default Card;