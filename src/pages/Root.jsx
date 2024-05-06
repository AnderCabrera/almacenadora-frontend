import React from 'react';
import { Link } from 'react-router-dom';
import './root.css';

export const Root = () => {
  return (
    <div className="container1">
      <div className="container-div-first">
        <div className="title-container">
          <h1 className="title">Almacenadora</h1>
        </div>
        <div className="button-container">
        <Link to="login" className="button">Login</Link>
          <Link to="register" className="button">Register</Link>
        </div>
      </div>
      <div className='text-container'>
          <h1 className='title'>¿Para Qué? </h1>
          <div className='text'>Una herramienta almacenadora en la cual se puede poner distintos
            tipos de tareas, lo cual nos resulta más fácil para poder trabajar de mejor manera con el equipo
            correspondiente. 
          </div>
          <div className='text'>
          ¿Te atreves a experimentar sus resultados?  
          </div>
      </div>
    </div>
  );
};
