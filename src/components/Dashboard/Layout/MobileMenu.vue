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
      <a class="nav-link" href="#logout">
        <span class="no-icon">Desconectar</span>
      </a>
    </li>
  </ul>
</template>
<script>
  import DropDown from 'src/components/UIComponents/Dropdown.vue'

  export default {
    components: {
      DropDown
    }
  }
</script>
<style>
</style>
