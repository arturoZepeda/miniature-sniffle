<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    to: {
        type: String,
        required: true
    }
});

</script>

<template>
        <RouterLink 
        class="block md:inline-block px-4 py-2 text-sm font-semibold text-white bg-slate-500 hover:bg-slate-600" 
        :to="{ name: to }">
            <slot></slot>
        </RouterLink>
</template>