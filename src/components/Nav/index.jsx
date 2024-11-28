import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const [busca, setBusca] = useState("");

    const enviar = (e) => {
        e.preventDefault();
        if (busca != '') {
            navigate(`/busca/${busca}`);
            setBusca('');
        }

    }

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <h1>ArthurFlix</h1>
                        <i className="fa-solid fa-film"></i>
                    </Link>
                </div>

                <ul className="links">
                    <Link to='/' className="link">
                        <li>
                            Filmes
                        </li>
                    </Link>

                    <Link to='/series' className="link">
                        <li>
                            Séries
                        </li>
                    </Link>
                </ul>

                <form className="busca" id="busca" onSubmit={enviar}>
                    <input type="text" placeholder="Buscar" value={busca} onChange={alterado => setBusca(alterado.target.value)} />
                    <button type="submit">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </form>

                <div className="menu-hamburguer">
                    <button id="menuHamburguer" onClick={() => {
                        const iconeMenu = document.getElementById('iconeMenu');
                        if (iconeMenu.classList.contains('fa-bars')) {
                            iconeMenu.classList.remove('fa-bars');
                            iconeMenu.classList.add('fa-x');
                            fundoMenu.style.display = 'flex';
                            menu.classList.add('active');
                        } else {
                            iconeMenu.classList.remove('fa-x');
                            iconeMenu.classList.add('fa-bars');
                            fundoMenu.style.display = 'none';
                            menu.classList.remove('active')
                        }
                    }}>
                        <i id="iconeMenu" className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className="fundo-menu" id="fundoMenu"></div>

            <div className="menu" id="menu">
                <form className="busca" id="busca" onSubmit={enviar}>
                    <input type="text" placeholder="Buscar" value={busca} onChange={alterado => setBusca(alterado.target.value)} />
                    <button type="submit">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </form>

                <ul className="links">
                    <Link to='/' className="link">
                        <li>
                            Filmes
                        </li>
                    </Link>

                    <Link to='/series' className="link">
                        <li>
                            Séries
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Nav;