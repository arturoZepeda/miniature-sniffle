import api from "../lib/axios";

export default {
    obtenerClientes(){
        return api.get("/clientes");
    },
    agregarCliente(cliente){
        return api.post("/clientes", cliente);
    },
    actualizaEstado( id, data ){
        return api.patch(`/clientes/${id}`, data);
    },
    obtenerCliente(id){
        return api.get(`/clientes/${id}`);
    },
    actualizarCliente(id, cliente){
        return api.patch(`/clientes/${id}`, cliente);
    },
    deleteCliente(id){
        return api.delete(`/clientes/${id}`);
    }
}