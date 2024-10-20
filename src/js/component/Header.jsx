import React from "react"


const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/template.html">{props.linkPrincipal}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style= {{ '--bs-scroll-height': '100px'}}>
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href={props.referenciaLinkA}>{props.linkSegundarioA}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href={props.referenciaLinkB}>{props.linkSegundarioB}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href={props.referenciaLinkC}>{props.linkSegundarioC}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href={props.referenciaLinkD}>{props.linkSegundarioD}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Servicios" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
