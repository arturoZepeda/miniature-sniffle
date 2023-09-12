<script setup>
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
import axios from '../lib/axios';

const router = useRouter();

defineProps({
    titulo: {
        type: String,
        required: true
    }
});

const handleSubmit = (data) => {
    axios.post('/clientes', data)
        .then(({ data }) => { 
            console.log(data);
            router.push({ name: 'listado-clientes' });
        })
        .catch(error => { console.log(error); });
}
</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="listado-clientes">Regresar</RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w2/3 py-20 px-6">
                <FormKit type="form" submit-label="Guardar cliente" incomplete-message="No se han completado los datos mandatorios" @submit="handleSubmit">
                        <FormKit type="text" name="nombre" label="Nombre" placeholder="Nombre cliente" validation="required"
                            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"  />
                        <FormKit type="text" name="apellido" label="Apellido" placeholder="Apellido cliente" validation="required"
                            :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }" />
                        <FormKit type="email" name="email" label="Email" placeholder="Email" validation="required" 
                            :validation-messages="{ required: 'El Email del cliente es obligatorio' }" />
                        <FormKit type="tel" name="telefono" label="Teléfono" placeholder="No. 1234567890" validation="required|matches:/^[0-9]{10}$/ " 
                            :validation-messages="{ required: 'El teléfono del cliente es obligatorio', matches:'El formato de numero debe de ser a 10 digitos.' }" />
                        <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa"  />
                        <FormKit type="text" name="puesto" label="Puesto" placeholder="Puesto"  />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper{
    max-width: 100%;
}
</style>