<template>
  <card>
    <h4 slot="header" class="card-title">Nuevo Referido</h4>
    <form @submit="actualizarContacto">
      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Nombre"
                    placeholder="Nombre"
                    v-model="form.firstName"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Apellido"
                    placeholder="Nombre"
                    v-model="form.lastName"
                    required>
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="email"
                    label="E-mail"
                    placeholder="Email"
                    v-model="form.email"
                    required>
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Empresa"
                    placeholder="Nombre de la empresa"
                    v-model="form.company">
          </fg-input>
        </div>
      </div>


      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right">
          Crear Perfil
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
/* eslint-disable */
  import { mapState } from 'vuex'
  import { mapFields} from 'vuex-map-fields'
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
      actualizarContacto(e){
        e.preventDefault();
          this.$store.commit('Contactos/addUserReferer', this.form)
          this.form = []
          this.creationMenssage()
      },
      creationMenssage () {
        const notification = {
          template: `<span>El usuario fue <b>creado Correctamente!.</b></span>`
        }
        this.$notifications.notify({
            component: notification,
            icon: 'nc-icon nc-single-02',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'info'
          })
      }
    }
  }

</script>
<style>

</style>
