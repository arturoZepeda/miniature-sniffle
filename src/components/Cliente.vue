<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

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

const clienteNombre = computed(() => props.cliente.nombre + ' ' + props.cliente.apellido);


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

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink to="/">Editar</RouterLink>
        </td>
    </tr>
</template>