<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8" v-bind:class="{'col-md-12': !form.firstName}">
          <user-referer-form></user-referer-form>
        </div>
        <div class="col-md-4" v-if="form.firstName">
          <user-referer-card></user-referer-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapFields } from 'vuex-map-fields'
  import UserRefererForm from './UserReferer/UserRefererForm.vue'
  import UserRefererCard from './UserReferer/UserRefererCard.vue'

  export default {
    components: {
      UserRefererForm,
      UserRefererCard
    },
    computed: {
      ...mapFields(['form'])
    }
  }

</script>
<style>

</style>
