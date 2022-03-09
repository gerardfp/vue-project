<script>
export default {
    props: ['isAuthenticated','username']
}
</script>

<template>
    <div v-if="isAuthenticated">
      <p>Hello {{ username }} (<router-link to="/logout">Cerrar sessión</router-link>)</p>
      <slot></slot>
    </div>
    <div v-else>
      <p>Debes <router-link to="/login">iniciar sesión</router-link> para dejar un comentario</p>
    </div>
</template>

