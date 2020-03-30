import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api/api';

import './style.scss';
import logoImg from '../../assets/img/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      state,
    };

    await api.post('ngos', data)
      .then((response) => {
        if (response.status === 200) {
          history.push('/');
        }
      })
      .catch(() => {
        alert('Houve um erro ao processar os dados em nosso servidor.');
      });
  }

  return (
    <div className="resgister-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma, ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link className="route-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              maxLength="2"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
