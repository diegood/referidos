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
          <fg-input type="tel"
                    label="Telefono movil"
                    placeholder="Telefono movil"
                    v-model="form.tel"
                    required>
          </fg-input>
        </div>
      </div>
      <div class="row col-12">
        <b-form-group class="col-8">
          <h6>Tipo de trabajo</h6>
          <b-form-checkbox-group v-model="form.trabajos">
            <b-form-checkbox value="dg">Diseño Grafico</b-form-checkbox>
            <b-form-checkbox value="dw">Diseño Web</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
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
  // import { firebaseAction } from 'vuexfire'
  import checkGrup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group'
  import checbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox'
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import Card from 'src/components/UIComponents/Cards/Card.vue'
//   const setTodosRef = firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, { ref }) => {
//   // binding will automatically unbind any previously bound ref so you
//   // don't need to unbind before binding over an existing bound key
//   bindFirebaseRef('todos', ref)
//   // it is possible to unbind a bound key at any time
//   unbindFirebaseRef('user')
// })

  export default {
    components: {
      Card,
      'b-form-group': bFormGroup,
      'b-form-checkbox-group': checkGrup,
      'b-form-checkbox': checbox
    },
    data () {
      return {
        selected: '',
        options: [
          { text: 'Diseño Grafico', value: 'dg' },
          { text: 'Diseño Web', value: 'dw' },
        ]
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
    },    
    created: function () {
      this.$store.dispatch('Contactos/getFirebaseData');
    }
  }

</script>
<style>

</style>
