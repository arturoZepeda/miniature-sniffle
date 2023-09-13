<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import ClientesServices from '../services/ClientesServices';
const props = defineProps({
    cliente: {
        type: Object,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const actualizaEstadoCliente = (id) => {
    if (props.cliente.estado) {
        ClientesServices.desactivaCliente(id)
            .then(() => {
                props.cliente.estado = false;
            })
            .catch(error => { console.log(error); });
    } else {
        ClientesServices.activaCliente(id)
            .then(() => {
                props.cliente.estado = true;
            })
            .catch(error => { console.log(error); });
    }
}

const clienteNombre = computed(() => props.cliente.nombre + ' ' + props.cliente.apellido);
const estadoCliente = computed(() => props.cliente.estado);

</script>
<template>
        <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ clienteNombre }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button class="inline-flex rounded-full px-2 text-xs font-semibold leading-5" :class="estadoCliente ? 'bg-green-100 text-green-800':'bg-red-100 text-red-800'" @click="actualizaEstadoCliente(cliente.id)">
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink :to="{ name:'editar-cliente', params:{ id:cliente.id } }" class="text-indigo-600 hover:text-indigo-900 mr-5">Editar</RouterLink>
            <button class="text-red-600 hover:text-red-900">Eliminar</button>
        </td>
    </tr>
</template>