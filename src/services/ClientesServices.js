import api from "../lib/axios";

export default {
    obtenerClientes(){
        return api.get("/clientes");
    },
    agregarCliente(cliente){
        return api.post("/clientes", cliente);
    },
    desactivaCliente(id){
        return api.put(`/clientes/${id}`, {estado: false});
    },
    activaCliente(id){
        return api.put(`/clientes/${id}`, {estado: true});
    },
    obtenerCliente(id){
        return api.get(`/clientes/${id}`);
    },
    actualizarCliente(id, cliente){
        return api.put(`/clientes/${id}`, cliente);
    },
    deleteCliente(id){
        return api.delete(`/clientes/${id}`);
    }
}