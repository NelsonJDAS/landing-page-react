import React from "react"

const Card = (props) => {


    return (
        <div className="card border border-dark" style = {{width : '18rem'}} >
            <img src = {props.imagen} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.texto}</p>
                <a href="#" className="btn btn-outline-primary">Ver Servicio</a>
            </div>
        </div>
    );
};

export default Card;
