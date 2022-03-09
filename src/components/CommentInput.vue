<template>
        <input :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Deja tu comentario...">      
</template>

<script>

export default{
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>
