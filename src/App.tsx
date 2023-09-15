import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');
  const [dados, setDados] = useState(null);

  const handleCadastro = () => {
    const dadosCadastro = {
      nome,
      genero,
      dataNascimento,
      usuario,
      senha,
      email,
      confirmarEmail,
      cpf,
      idioma,
    };
    setDados(dadosCadastro);
    console.log(dadosCadastro);
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Gênero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Confirme seu email"
          type="email"
          value={confirmarEmail}
          onChange={(e) => setConfirmarEmail(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="CPF"
          type="number"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br />
        <input
          className="input"
          placeholder="Idioma do currículo"
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        />

        <button onClick={handleCadastro}>CADASTRAR</button>
      </div>

      {dados && (
        <div className="card">
          <div className="cardTitle">Dados informados:</div>
          <div>{`Nome: ${dados.nome}`}</div>
          <div>{`Gênero: ${dados.genero}`}</div>
          <div>{`Data de Nascimento: ${dados.dataNascimento}`}</div>
          <div>{`Usuário: ${dados.usuario}`}</div>
          <div>{`E-mail: ${dados.email}`}</div>
          <div>{`CPF: ${dados.cpf}`}</div>
          <div>{`Idioma do Currículo: ${dados.idioma}`}</div>
        </div>
      )}
    </div>
  );
}

export default App;


