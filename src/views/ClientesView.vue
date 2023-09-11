<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
const clientes = ref([]);
onMounted(() => {
    axios.get('http://localhost:3000/clientes')
        .then(({data}) => {clientes.value = data;})
        .catch(error => {console.log(error);});
});

defineProps({
    titulo: {
        type: String,
        required: true
    }
});
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">Nuevo Cliente</RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
    </div>
    
</template>