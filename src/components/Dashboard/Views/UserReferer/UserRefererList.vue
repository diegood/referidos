<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th>Nombre</th>
        <th>Empresa</th>
        <th>Email</th>
      </slot>
    </thead>
    <tbody>
      <!-- eslint-disable-next-line -->
      <tr v-for="userReferer in UsersReferers">
          <td>{{userReferer.firstName}}</td>
          <td>{{userReferer.company}}</td>
          <td>{{userReferer.email}}</td>
      </tr>
    </tbody>
  </table> 
</template>
<script>
/* eslint-disable */
    import { mapState} from "vuex";
    export default {
        name: "UserRefererList",
        computed: mapState({
            UsersReferers: state => state.Contactos.usersReferers
        }),
        // created() {
        //     this.$store.dispatch("Contactos/getAll");
        // }
    };
</script>
<style>
</style>
