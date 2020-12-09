import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Typography} from '@material-ui/core'



function FormularioCadastro({ aoEnviar, validarCPF }) {

  function formularioAtual(etapa){
    switch(etapa) {
      case 0:
        return <DadosUsuario />
        case 1: 
        return <DadosPessoais  aoEnviar={aoEnviar} validarCPF={validarCPF} />
        case 2: 
        return <DadosEntrega />
    
      default:
        return <Typography>Erro ao selectionar formulário</Typography>
    }
  }

  const [etapaAtual, setEtapaAtual ]= useState(1);
  return (
    <>

      {formularioAtual(etapaAtual)}

    </>
  );
}


export default FormularioCadastro;
