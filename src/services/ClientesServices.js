import api from "../lib/axios";

export default {
    obtenerClientes(){
        return api.get("/clientes");
    },
    agregarCliente(cliente){
        return api.post("/clientes", cliente);
    }
     
}