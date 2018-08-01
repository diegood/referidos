<template>
  <card>
    <h4 slot="header" class="card-title">Nuevo Referido</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="Empresa"
                    placeholder="Nombre de la empresa"
                    v-model="form.company">
          </fg-input>
        </div>
        <div class="col-md-7">
          <fg-input type="email"
                    label="E-mail"
                    placeholder="Email"
                    v-model="form.email">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Nombre"
                    placeholder="Nombre"
                    v-model="form.firstName">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Apellido"
                    placeholder="Nombre"
                    v-model="form.lastName">
          </fg-input>
        </div>
      </div>

      <div class="text-center">
        <!-- <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Crear Perfil
        </button> -->
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
/* eslint-disable */
  import { mapFields } from 'vuex-map-fields'
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapFields(['form']), // mapeas el form entero y cuando queres mostrar las props. usas el objeto form.[prop]
    },
    methods: {
      // updateProfile () {
      //   alert('Your data: ' + JSON.stringify(this.user))
      // },
      // actualizarContacto(user){
      //   this.$store.commit('contacto/agregarContacto', this.user)
      // }
    }
  }

</script>
<style>

</style>
