<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
            <drop-down tag="li" class="d-none">
              <template slot="title">
                <i class="nc-icon nc-bell-55"></i>
                <b class="caret"></b>
                <span class="notification">5</span>
              </template>
              <a class="dropdown-item" href="#">Notificacion 1</a>
            </drop-down>
            <a href="#" class="nav-link">
              <li  v-on:click="logout" class="nav-item">
                Desconectar 
                 <i class="nc-icon nc-button-power"> </i> 
              </li>
            </a>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import DropDown from 'src/components/UIComponents/Dropdown.vue'
import firebase from 'firebase/app'
export default {
  computed: {
    routeName () {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    }
  },
  data () {
    return {
      activeNotifications: false
    }
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown () {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown () {
      this.activeNotifications = false
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    },
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
