import React from "react"


const DescripcionHeader = () => {

    return (
        <div className="container bg-light py-3 rounded-2 my-3 border border-dark text-center" id="descripcion">
            <h1>Quienes Somos?</h1>
            <p> somos una compañía especializada en la fabricación, distribución y suministro de tuberías y sistemas de conducción de fluidos. Ofrecen soluciones para diversos sectores como la construcción, la industria, y la agricultura, garantizando productos de alta calidad y durabilidad, que cumplen con los estándares internacionales. Además, brindan asesoría técnica y soporte a sus clientes, ayudando a seleccionar el sistema de tuberías adecuado para cada proyecto, desde redes de agua potable hasta conducciones de gas y desagües industriales.</p>
            <button className= "btn btn-outline-dark fw-bold">Saber mas</button>
        </div>
    );
};

export default DescripcionHeader;
