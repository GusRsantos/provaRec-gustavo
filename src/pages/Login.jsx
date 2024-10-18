import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"


import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/usuarios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("")


  //variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState(" m-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("")
  const [alertaVariant, setAlertaVariant] = useState("danger")

  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([])
  const Navigate = useNavigate();
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


  const handleLogin = async (e) => {
    e.preventDefault()

    if (email != "") {
      if (senha != "") {
        if (senha == "brigadeiro123" && email == "docemel@sodoce.com.br") {
          console.log("entrou")
          setAlertaClass("mb-3")
          alert("Login efetuado com sucesso !")
          setAlertaVariant("sucess")

          Navigate('/home');

        } else {
          setAlertaClass("mb-3")
          setAlertaMensagem("Usuário ou senha incorreto !")
        }
      }
      else {
        setAlertaClass("mb-3")
        setAlertaMensagem("O campo senha não pode ser vazio")
      }
    } else {
      setAlertaClass("mb-3")
      setAlertaMensagem("O campo email não pode ser vazio")
    }


  }

  return (
    <div>
      <Container>
        <span class="material-symbols-outlined" style={{ fontSize: "100px" }}>
        </span>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInputName"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSenha"
            label="Senha"
            className='mb-3'
          >
            <Form.Control type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => { setSenha(e.target.value) }} />
          </FloatingLabel>



          <Alert key="danger" variant={alertaVariant} className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit" >Login</Button>{''}

        </form>
      </Container>
    </div>
  )
}
export default Login