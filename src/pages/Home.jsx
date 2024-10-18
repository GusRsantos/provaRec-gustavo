import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import React, { useState, useEffect } from "react";
import Cadastro from "./Cadastro";
const url = "http://localhost:5000/usuarios";

const Home = () => {
  const [cadastro, setCadastro] = React.useState(false);
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([])


  //Resgate de dados da API
  useEffect(() => {

    async function fetchData() {
      try {
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch (error) {
        console.log(error.mensage)
      }
    }
    fetchData()

  }, []);

  return (
    <div>
      <Container>
        <h1>Lista de produtos</h1>
        <div className="d-grid col-3 gap-2">

        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.preco}</td>
                <td>{user.tipo}</td>
                <td>

                  <Button variant="danger"

                    onClick={async () => {
                      const res = await fetch(`http://localhost:5000/usuarios/${user.id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                      });
                      const funcionarioRemovido = await res.json()
                      alert(`Usuário ${funcionarioRemovido.nome} foi excluido`)
                    }}
                  >
                    Excluir</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>


      </Container>
    </div>
  );
};


export default Home