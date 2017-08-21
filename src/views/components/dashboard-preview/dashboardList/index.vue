<template>
  <div>
    <ul class="dashboard-list">
      <li class="dashboard-link" v-for="(listData, index) in dashboardListData">
        <router-link to="">{{listData.title}}</router-link>
      </li>
      <li>
        <i class="el-icon-more"></i>
      </li>
      <li @click="openManageMdl">
        <i class="el-icon-setting"></i>管理面板
      </li>
      <li @click="openAddDashbdMdl">
        <i class="el-icon-plus"></i>新建面板
      </li>
      <router-view></router-view>
    </ul>
    <add-dashboard-mdl :addDashbdMdlVisible.sync="addDashbdMdlVisible"></add-dashboard-mdl>
    <manage-dashboard-mdl :manageDashbdMdlVisible.sync="manageDashbdMdlVisible" :dashboardListData="dashboardListData"></manage-dashboard-mdl>
  </div>
</template>

<script>
  import addDashboardMdl from '../dialog/addDashboardMdl.vue';
  import manageDashboardMdl from '../dialog/manageDashboardMdl';

  export default {
    data() {
      return {
        addDashbdMdlVisible: false,
        manageDashbdMdlVisible: false
      };
    },
    name: 'dashboardList',
    props: ['dashboardListData'],
    components: {
      addDashboardMdl: addDashboardMdl,
      manageDashboardMdl: manageDashboardMdl
    },
    beforeMount() {
      console.log(this.dashboardListData);
    },
    methods: {
      openAddDashbdMdl() {
        this.addDashbdMdlVisible = true;
      },
      openManageMdl() {
        this.manageDashbdMdlVisible = true;
      }
    }
  };
</script>

<<style scoped lang="scss">
.dashboard-list{
  width: 1200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin: 0 auto;
  li{
    list-style: none;
    padding: 0 10px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    a{
      text-decoration: none;
      color: #666;
    }
  }
}
</style>

