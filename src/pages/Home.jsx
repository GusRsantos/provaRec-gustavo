import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ModalCadastrar from "../components/ModalCadastrar";

import React, { useState, useEffect } from "react";
const url = "http://localhost:5000/usuarios";

const Home = () => {
  const [modalCadastrar, setModalCadastrar] = React.useState(false);

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("")
const [categoria, setCategoria] = useState("")
  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([])


  //Resgate de dados da API
  useEffect(() => {

    async function fetchData() {
      try{
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch(error){
        console.log(error.mensage)
      }
    }
    fetchData()

  }, []);

  return (
    <div>
      <Container>
        <h1>Lista de algo</h1>
        <div className="d-grid col-3 gap-2">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 d-inline-flex justify-content-center"
            onClick={() => {
              setModalCadastrar(true)
            }}
          >
            <span
              className="material-symbols-outlined flex"
              style={{ fontSize: "30px" }}
            >
            </span>
            Cadastrar
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
           
            <tr key = {user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.tipo}</td>
              <td>                
                <ButtonGroup size="sm">
                <Button variant="info" onClick={async () => {
  try {
    const res = await fetch(`http://localhost:5000/usuarios/${user.id}`, {
      method: "PUT", // ou PATCH, dependendo da API
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Aqui você pode passar os dados que deseja atualizar
        nome: user.nome,
        email: user.email,
        tipo: user.tipo
      }),
    });
    const funcionarioEditado = await res.json();
    alert(`Usuário ${funcionarioEditado.nome} foi atualizado`);
  } catch (error) {
    console.log("Erro ao editar:", error);
  }
}}>
  Editar
</Button>

                  <Button variant="danger"
                  
                  onClick={async () => {
                    const res = await fetch (`http://localhost:5000/usuarios/${user.id}`,{
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" }, 
                    });
                    const funcionarioRemovido = await res.json()
                    alert(`Usuário ${funcionarioRemovido.nome} foi excluido`)
                  }}
               >
                   Excluir</Button>
                </ButtonGroup>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
        <ModalCadastrar
          show={modalCadastrar}
          onHide={() => {
            setModalCadastrar(false);
          }}
        />
      </Container>
    </div>
  );
};


export default Home