<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/general">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>General</p>
      </sidebar-link>
      <sidebar-link to="/referido">
        <i class="nc-icon nc-circle-09"></i>
        <p>Nuevo referido</p>
      </sidebar-link>
      <sidebar-link to="/lista-referidos">
        <i class="nc-icon nc-notes"></i>
        <p>Lista de referidos</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>
    </div>
  </div>
</template>
<script>
  import TopNavbar from './TopNavbar.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    name: 'DashboardLayout',
    components: {
      TopNavbar,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
