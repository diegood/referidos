<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Lista de Usuarios referidos</h4>
              <p class="card-category">Aqui todos sus referencias</p>
            </template>
            <div class="table-responsive">
              <UserRefererList class="table-hover"></UserRefererList>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import UserRefererList from './UserReferer/UserRefererList.vue'
  export default {
    components: {
      UserRefererList,
      Card
    }
  }
</script>
<style>
</style>
