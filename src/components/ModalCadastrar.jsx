import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";



const url = "http://localhost:5000/usuarios";

const ModalCadastrar = (props) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("Administrador");
const handleCadastrar = async () =>{
if(nome != "" && email  != "" && senha != "") {
const user = {nome, email, senha, tipo };
const res = await fetch(url, {
method: "POST",
headers: { "content-Type": "application/json" },
body: JSON.stringify(user),   
});
setNome("");
setEmail("");
setSenha("");
alert("Cadastrado com sucesso");
props.onHide();
} else{
    alert("Cadastro com sucesso");
}
};

  return (
    <div>
         <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
    Cadastrar funcionário
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Alguma coisa</h4>

     {/* caixinha do nome */}
     <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>


              {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>


           {/* caixinha da senha */}
          <FloatingLabel
            controlId="floatingSenha"
            label="Senha"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>   

            {/* caixinha tipo */}
        <Form.Group  controlId="formGridTipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Select 
            value={tipo}
            onChange={(e) =>{
                setTipo(e.target.value)
            }}
            >
            <option>Administrador</option>
            <option>Gerente</option>
            <option>Funcionário</option>
          </Form.Select>
        </Form.Group>




      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCadastrar}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalCadastrar