<template>
  <ul class="nav nav-mobile-menu">
    <drop-down>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notificaciones</span>
      </template>
      <a class="dropdown-item" href="#">Notification 1</a>
    </drop-down>
    <li class="nav-item">
      <span class="nav-link" v-on:click="logout">
        <span class="no-icon"> Desconectar</span>
      </span>
    </li>
  </ul>
</template>
<script>
  import DropDown from 'src/components/UIComponents/Dropdown.vue'
  import firebase from 'firebase/app'
  import 'firebase/auth'

  export default {
    components: {
      DropDown
    },
    methods: {
      logout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push('/login')
        })
      }
    }
  }
</script>
<style>
</style>
