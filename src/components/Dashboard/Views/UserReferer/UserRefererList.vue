<template>
<div>
  <div class="hide">
      <!-- Modal -->
      <b-modal id="verClienteModal" hide-header="" ok-only="" size="sm" class="col-md-3" title="Cliente">
        <UserRefererCard></UserRefererCard>
      </b-modal>
  </div>
  <table class="table">
    <thead>
      <slot name="columns">
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>fecha Creacion</th>
      </slot>
    </thead>
    <tbody>
      <!-- eslint-disable-next-line -->
      <tr v-for="userReferer in UsersReferers"  v-b-modal.verClienteModal  @click="form=userReferer">
          <td>{{userReferer.firstName}}</td>
          <td>{{userReferer.tel}}</td>
          <td>{{userReferer.email}}</td>
          <td>{{userReferer.creado}}</td>
      </tr>
    </tbody>
  </table> 
</div>
</template>
<script>
/* eslint-disable */
    import bModal from 'bootstrap-vue/es/components/modal/modal'
    import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
    import UserRefererCard from 'src/components/Dashboard/Views/UserReferer/UserRefererCard.vue'
    import { mapState} from "vuex"
    import { mapFields} from 'vuex-map-fields'

    export default {
        name: "UserRefererList",
        data () {
          return {
            contactoId: ""
          }
        },
        computed:{
          ...mapFields(['form']),
          ...mapState({
              UsersReferers: state => state.Contactos.usersReferers
          })
        },
        created() {
          this.$store.dispatch('Contactos/fetchContacts', { self: this })       
        },
        methods: {
          // setCardInfo(contacto){
          //   this.$store.commit('userReferer/setFormUserReferer', contacto)
          // },
        },
        components: {
          'b-modal': bModal,
          UserRefererCard
        },
        directives: {
            'b-modal': bModalDirective
        }
        // created() {
        //     this.$store.dispatch("Contactos/getAll");
        // }
    };
</script>
<style>
</style>
