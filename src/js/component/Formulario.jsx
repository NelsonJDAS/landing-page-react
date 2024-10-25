import React from "react";

const Formulario = () => {

    return (
            <div className="text-center">
			<h2>Contacto</h2>
                <form className="container-fluid border border-dark rounded-3 p-0">
                    <div className="row px-3">
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label fw-bold p-1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">No compartiremos esta informacion con nadie</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label fw-bold p-1">Numero</label>
                                <input type="number" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                    </div>
                    <div className="row px-3">
                    <div className="col-md-4">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Mantenerme al tanto sobre el caso</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="Publicidad"/>
                            <label class="form-check-label" for="Publicidad">Acepto recibir publicidad via mail-numero</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="Condiciones"/>
                            <label class="form-check-label" for="Condiciones">Acepto los <a href="" className="fw-bold">Terminos de Condiciones</a></label>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label fw-bold p-1">Fecha de preferencia (Opcional)</label>
                                <input type="date" class="form-control text-center" id="exampleInputPassword2"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="drop" class="form-label fw-bold p-1">Que necesitas?</label>
                            <div class="dropdown" id="drop">
                                <button class="btn btn-outline-dark dropdown-toggle fw-bold w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">Pagos</button></li>
                                    <li><button class="dropdown-item" type="button">Problemas Con el Sistema de tuberias</button></li>
                                    <li><button class="dropdown-item" type="button">Instalacion de tuberias</button></li>
                                    <li><button class="dropdown-item" type="button">Sistema de tuberias</button></li>
                                    <li><button class="dropdown-item" type="button">Garantia</button></li>
                                    <li><button class="dropdown-item" type="button">Otro</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 rounded-3">
                            <p className="alert alert-warning fw-bold">Nota: Tardamos de 24-48 horas en contactarte</p>
                        </div>
                        <div className="col-md-4 align-content-end">
                            <button type="submit" class="btn btn-outline-dark w-100 rounded-0">Listo!</button>
                        </div>
                    </div>
                </form>
			</div>
    )
}

export default Formulario;