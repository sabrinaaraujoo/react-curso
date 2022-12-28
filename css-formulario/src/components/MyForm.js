import React, { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - controled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [radio, setRadio] = useState(user ? user.radio : "");
  // const [radio2, setRadio2] = useState(user ? user.radio2 : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando Formulário");
    console.log(name, email, bio, role, radio);

    // 7 - Limpar formulários
    setName("");
    setEmail("");
    setBio("");
    setRadio("");
    // setRadio2("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome..."
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            cols="30"
            rows="10"
            placeholder="Descriçõa do usuário..."
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função:</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <div>
          <label>Pergunta qualquer para resposta:</label>
          <input
            id="sim"
            type="radio"
            name="resposta"
            value="Sim"
            checked={radio}
            onChange={(e) => setRadio(e.target.value)}
          />
          Sim
          <input
            id="nao"
            type="radio"
            name="resposta"
            value="Não"
            checked={radio}
            onChange={(e) => setRadio(e.target.value)}
          />
          Não
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
