<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <user-referer-form></user-referer-form>
        </div>
        <div class="col-md-4">
          <user-referer-card></user-referer-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserRefererForm from './UserReferer/UserRefererForm.vue'
  import UserRefererCard from './UserReferer/UserRefererCard.vue'

  export default {
    components: {
      UserRefererForm,
      UserRefererCard
    }
  }

</script>
<style>

</style>
