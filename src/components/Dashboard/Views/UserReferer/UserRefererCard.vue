<template>
    <div class="container justify-content-center">
        <div class="row center-block m-3">
            <qrcode v-bind:value="form.firstName" :options="{ size: 150 }" class="img-responsive"></qrcode>
        </div>
        <div class="row text-center">
            <p><strong>{{form.firstName}} {{form.lastName}}</strong></p>
            <div v-if="form.email" class="info">
                <span class="form-group"><i class="nc-icon nc-email-83"></i> <a v-bind:href="'mailto:'+form.email" title="#"> {{form.email}}</a></span>
                <span class="form-group" v-if="form.tel"><i class="fa fa-phone"></i> {{form.tel}}</span>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
  import { mapFields } from 'vuex-map-fields'
  import VueQrcode from '@xkeshi/vue-qrcode'
  export default {
    components: {
      VueQrcode
    },
    computed: {
      ...mapFields(['form'])
    },  
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style scoped>

</style>
