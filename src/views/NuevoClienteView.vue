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
            <FormKit type="form" action="false">
                <div class="p-8">
                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <FormKit type="text" name="nombre" label="Nombre" placeholder="Nombre cliente" validation="required" :validation-messages="{ required: 'El nombre del cliente es obligatorio'}"/>
                        </div>
                        <div>
                            <FormKit type="text" name="apellido" label="Apellido" placeholder="Apellido cliente" validation="required"/>
                        </div>
                        <div>
                            <FormKit type="text" name="empresa" label="Empresa" placeholder="Empresa" validation="required"/>
                        </div>
                        <div>
                            <FormKit type="text" name="email" label="Email" placeholder="Email" validation="required"/>
                        </div>
                        <div>
                            <FormKit type="text" name="telefono" label="Teléfono" placeholder="No. 1234567890" validation="required"/>
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <FormKit type="button" variant="primary">Agregar Cliente</FormKit>
                    </div>
                </div>
            </FormKit>
        </div>
    </div>
</template>