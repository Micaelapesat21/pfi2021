import React from 'react'

export default function Curso(props) {
    return (
        <div className="card ">
            <div className="card-body">
                <h3 className="card-tittle text-center"> {props.title}</h3>
                <p className="card-text text-secondary">
                    Total alumnos:
                    <br/>
                    Total Presentes:
                    <br/>
                    Total Ausentes: 
                    <br/>
                </p>
                <a href="#!" className="btn btn-outline-secondary"> Entrar al Curso </a>
            </div>
        </div>
    )
}
