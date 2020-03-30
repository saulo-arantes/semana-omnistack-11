import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.scss';
import logoImg from '../../assets/img/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="route-link" to="/perfil">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="number" placeholder="Valor em reais" />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
