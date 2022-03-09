<template>
  <Auth :isAuthenticated="isAuthenticated" :username="user?.name">
    <CommentInput v-model="nuevoContenido" @keypress.enter="addComentario"></CommentInput> 
  </Auth>
  <Comment v-for="comentario in comentarios" :key="comentario.id" :contenido="comentario.contenido + ' {id:' + comentario.id + '}'" :email="comentario.email" :picture="comentario.picture"/>
</template>

<script>
import Comment from './components/Comment.vue'
import Auth from './components/Auth.vue'
import CommentInput from './components/CommentInput.vue'

let commentsPending = 0;
let gettingComments = false;

export default {
  components: {
    Comment, Auth, CommentInput
  },

  data () {
    return{
      comentarios: [ { contenido: "Comments are loading... 🥱" }, ],
      nuevoContenido: '',
      user: this.$auth0.user,
      isAuthenticated: this.$auth0.isAuthenticated
    }
  },
  
  async created() {
    this.getComentarios();
    setInterval(this.getComentarios, 2000);
  },
  
  methods: {
    
    async getComentarios() {
      if(gettingComments) return;

      gettingComments = true;
      try {
        if (commentsPending == 0) {
          const comentarios = await (await fetch(`/api/get`)).json();

          if (commentsPending == 0) {
            this.comentarios = comentarios;
          }
        }
      }catch (err){
        console.log("Error al obtener comentarios");
        console.log(err);
      }
      gettingComments = false;
    },
    
    async addComentario() {
      const nuevoContenido = this.nuevoContenido
      this.nuevoContenido = '';

      const nuevoComentario = {
        contenido: nuevoContenido,
        email: this.user.email,
        picture: this.user.picture
      } 
      this.comentarios.push(nuevoComentario);
      
      commentsPending++;
      const token = await this.$auth0.getAccessTokenSilently();
      const insertResultado = await (await fetch(`/api/add?contenido=${nuevoContenido}`,{ headers: { Authorization: `Bearer ${token}`}})).json();

      nuevoComentario.id = insertResultado.insertId;
      commentsPending--;

    }
  }
}
</script>


<style src="./Comments.css" scoped />