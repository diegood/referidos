<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Referidos</p>
              <h4 class="card-title">{{countContacs}}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>comisión 
            </div>
          </stats-card>
        </div>

        

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  import { mapGetters } from "vuex"
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'

  export default {
    components: {
      StatsCard
    },
    data () {
      return {
      }
    },
    computed: {
     ...mapGetters('Contactos',['countContacs']),
    },
  }
</script>
<style>

</style>
