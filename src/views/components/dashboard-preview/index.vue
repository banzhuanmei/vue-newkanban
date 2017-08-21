<<template>
  <div class="dashboard-preview">
    <div class="header">

    </div>
    <div class="dashboard-content">
      <dashboard-list :dashboardListData="dashboardListData"></dashboard-list>
    </div>
  </div>
</template>

<<script>
  import * as api from '@/api';
  import dashboardList from './dashboardList';
  export default {
    name: 'dashboardPreview',
    data() {
      return {
        dashboardListData: []
      };
    },
    components: {
      dashboardList: dashboardList
    },
    beforeMount() {
      let self = this;
      api.getDashboardList().then(function(rs) {
        self.dashboardListData = rs.result;
      });
    }
  };
</script>

<style scoped>
  .header{
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    height: 46px;
    min-height: 46px; 
    background-color: #2b3643;
  }
  .dashboard-content{
    line-height: 46px;
    border-bottom: 2px solid #e9e9e9;
    background: #fff;
  }
</style>


