<script>
export default {
    props: ['contenido', 'email', 'picture']
}
</script>

<template>
    <div>
        <p>{{ contenido }}</p>
        <!-- <p>{{ email }}</p> -->
        <!-- <img :src="picture" alt=""> -->
    </div>
</template>

