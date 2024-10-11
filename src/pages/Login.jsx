import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav"


import { useState, useEffect } from 'react';

const url = "http://localhost:5000/usuarios";

const Login = () => {

  const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("")
    

    //variaveis pro alerta
    const [alertaClass, setAlertaClass] = useState(" m-3 d-none")
    const [alertaMensagem, setAlertaMensagem] = useState("")
    const [alertaVariant, setAlertaVariant] = useState("danger")

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



  const handleLogin = async (e) => {
    e.preventDefault()


      if(senha != "") {
        if(nome == "admin" && senha == 4321){
          console.log("entrou")
          setAlertaClass("mb-3")       
          alert("Login efetuado com sucesso !")  
          setAlertaMensagem("Login efetuado com sucesso !")
          setAlertaVariant("sucess")
        
  

        }else{
        setAlertaClass("mb-3")
        setAlertaMensagem("Usuário ou senha incorreto !")   
        }
      }
      else{
        setAlertaClass("mb-3")
        setAlertaMensagem("O campo senha não pode ser vazio")      
      }



  }


  return (
    <div>
        <Container>
        <span class="material-symbols-outlined" style={{fontSize:"100px"}}>
</span>
    <h1>Login</h1>

            <form onSubmit={handleLogin}>      
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

      {/* caixinha da senha */}
      <FloatingLabel controlId="floatingSenha"
      label="Senha"
       className='mb-3'
       >
        <Form.Control type="password"
        placeholder="Password"
        value={senha}
        onChange={(e) => {setSenha(e.target.value)}} />
      </FloatingLabel>

     

      <Alert key="danger" variant={alertaVariant} className={alertaClass}>
          {alertaMensagem}
        </Alert>

        <Button variant="primary" type="submit">Login</Button>{''}

        </form>

        <p>Não tem cadastro? <Nav.Link href="/cadastro">Cadastrar-se</Nav.Link> </p>
      </Container>
    </div>
  )
}

export default Login