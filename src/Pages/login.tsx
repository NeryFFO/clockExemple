import { Button, ThemeProvider, TextField, Container } from "@mui/material";
import { themeMaterial } from "../Theme/themeMaterial";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from '../assets/react.svg'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidation } from "../validation/userValidation"


export function Login (){

  // Estado de contagem do botão
    const [count, setCount] = useState(0)

    // Navegação
    const navigate = useNavigate();

    // Hook form
    const {register, handleSubmit, reset, formState : {errors}} = useForm({
      resolver: yupResolver(userValidation)
    })

    const submit = (data:any) =>{
      console.log(data);
    }
    
    return(
        <>
        //Exemplo dos botões com MUI
        <p>EU SOU A TELA DE LOGIN</p>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
  
        <Button variant="contained" sx={{m:10, border:5, borderRadius:20}}> BOTÃO MUI SEM ESTILO</Button>


        <ThemeProvider theme={themeMaterial}>
        <Button variant='contained' color='primary' onClick={()=>navigate("/home")}>
          Ir para tela de Home
        </Button>
        <Button variant="contained" color="secondary"> Botão novo com o style criado</Button>
        <button>BOTÃO NORMAL HTML</button>
        // fim do exemplo

        //Exemplo hook form
        <form onSubmit={handleSubmit(submit)}>
          <div className="container">
            <label >Nome</label>

            <TextField id="fullname"
             variant="outlined" {...register('fullname')}/>

              <div className="errorMessage">{errors.fullname?.message}</div>


             <div className="errorMessage">Senha</div>

            <TextField id="password" type="password"
             variant="outlined" {...register('password')}/>

             <div>{errors.password?.message}</div>

            <TextField id="confirmPassword" type="password" variant="outlined"
             typeof="password" {...register('confirmPassword')}/>   

             <div>{errors.confirmPassword?.message}</div>

             <Button type="submit">
              Submit
             </Button>

             <Button variant="contained" onClick={()=>reset()}>
              Reset
             </Button>
          </div>
        </form>
        //Fim do exemplo
      </ThemeProvider>
      </>
    );
}