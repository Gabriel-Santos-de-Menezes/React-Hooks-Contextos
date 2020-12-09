import React from "react";
import { TextField, Button } from "@material-ui/core";
function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
    
      />
      <TextField
        id="endereco"
        label="Enderço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
       <TextField
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        required
        
      />
       <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
        
      />
       <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
        
      />
       <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
