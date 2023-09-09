<script setup>
import { FormKit } from '@formkit/vue';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';
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
            <RouterLink to="inicio">Regresar</RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w2/3 py-20 px-6">
                <FormKit type="form" action="false">
                        <FormKit type="text" name="nombre" label="Nombre" placeholder="Nombre cliente" validation="required"
                            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }" />
                        <FormKit type="text" name="apellido" label="Apellido" placeholder="Apellido cliente" validation="required"
                            :validation-messages="{ required: 'El Apellido del cliente es obligatorio' }"/>
                        <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa" validation="required" />
                        <FormKit type="email" name="email" label="Email" placeholder="Email" validation="required" 
                            :validation-messages="{ required: 'El Email del cliente es obligatorio' }"/>
                        <FormKit type="tel" name="telefono" label="Teléfono" placeholder="No. 1234567890" validation="required|matches:/^[0-9]{10}$/ " 
                            :validation-messages="{ required: 'El teléfono del cliente es obligatorio', matches:'el formato de numero debe de ser a 10 digitos.' }"/>

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