<template>
  <div class="dialog-manage">
    <el-dialog title="管理dashboard" :visible="dialogFormVisible">
      <ul class="dialog-manage-tab">
        <li class="manage-tab-item" :class="{ 'manage-tab-item--active': isShowDashbdList }" @click="showDashboardList">Dashboard</li>
        <li class="manage-tab-item" :class="{ 'manage-tab-item--active': isShowRoleList }" @click="showRoleList">权限</li>
      </ul>
      <dialog-dashbdList :isShowDashbdList="isShowDashbdList" :dashboardListData="dashboardListData"></dialog-dashbdList>
      <dialog-roleList :isShowRoleList="isShowRoleList"></dialog-roleList>
    </el-dialog>
  </div>
  </div>
</template>

<script>
  import dialogDashbdList from './dialogShowCont/dialogDashbdList';
  import dialogRoleList from './dialogShowCont/dialogRoleList';

  export default {
    name: 'manageDashboardMdl',
    data() {
      return {
        isShowDashbdList: true,
        isShowRoleList: false
      };
    },
    props: ['manageDashbdMdlVisible', 'dashboardListData'],
    computed: {
      dialogFormVisible: {
        get() {
          return this.manageDashbdMdlVisible;
        },
        set(val) {
          this.$emit('update:manageDashbdMdlVisible', val);
        }
      }
    },
    components: {
      dialogDashbdList: dialogDashbdList,
      dialogRoleList: dialogRoleList
    },
    methods: {
      showDashboardList() {
        this.isShowDashbdList = true;
        this.isShowRoleList = false;
      },
      showRoleList() {
        this.isShowDashbdList = false;
        this.isShowRoleList = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dialog-manage-tab{
    display: flex;
    line-height: 36px;
    .manage-tab-item {
      padding: 0 10px;
      cursor: pointer;
      &--active{
        color: #36c6d3;
        border: 1px solid #e9e9e9;
        border-bottom: none;
        background: #fff;
      }
    }
  }
</style>

