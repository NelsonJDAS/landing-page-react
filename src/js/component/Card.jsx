import React from "react"

const Card = (props) => {


    return (
        <div className="card border border-dark p-3" style = {{width : '18rem'}} >
            <img src = {props.imagen} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title fw-bold">{props.titulo}</h5>
                <p className="card-text">{props.texto}</p>
                <a href="#" className="btn btn-outline-primary fw-bold">Ver Servicio</a>
            </div>
        </div>
    );
};

export default Card;
