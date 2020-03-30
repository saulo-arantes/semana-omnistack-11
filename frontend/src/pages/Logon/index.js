import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.scss';

import logoImg from '../../assets/img/logo.svg';
import heroesImg from '../../assets/img/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero logo" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="route-link" to="/cadastro">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
