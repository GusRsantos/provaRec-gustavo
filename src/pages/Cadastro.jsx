import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:5000/usuarios"

const Cadastro = () => {

  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");

  // variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cliquei");
    if (nome != "") {
      if (preco != "") {
        if (tipo != "") {
          const user = { nome, preco, tipo };
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          alert("Usuário cadastrado com sucesso");
          setNome("");
          setPreco("");
          setTipo("");
          Navigate("/home");
        } else {
          setAlertaClass("mb-3");
          setAlertaMensagem("O campo tipo não pode ser vazio");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo preço não pode ser vazio");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo nome não pode ser vazio");
    }
  };

  return (
    <div>
      <Container>
        <span class="material-symbols-outlined" style={{ fontSize: "10px" }}>
        </span>
        <h1>Cadastre o produto</h1>
        <form onSubmit={handleSubmit}>
          {/* caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite o nome do produto"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite o preço da comida"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>

          {/* caixinha tipo */}
          <Form.Group controlId="formGridTipo">
            <Form.Select
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value)
              }}
            >
              <option>Tipo</option>
              <option>Salgado</option>
              <option>Doce</option>
              <option>Bebida</option>
            </Form.Select>
          </Form.Group>
          <br></br>
          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </form>

      </Container>
    </div>
  )
}

export default Cadastro