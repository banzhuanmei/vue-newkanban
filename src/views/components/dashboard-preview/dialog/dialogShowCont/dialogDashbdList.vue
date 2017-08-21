<template>
  <div class="manage-dialog-dashboard" v-show="isShowDashbdList">
    <ul class="manage-dialog-item">
      <li class=""></li>
      <li class="dashboard-name">名称</li>
      <li class="dashboard-hide">隐藏</li>
      <li class="dashboard-del">删除</li>
    </ul>
    <ul class="manage-dialog-list" v-for="(listData, index) in dashboardListData">
      <li></li>
      <li class="dashboard-name">{{listData.title}}</li>
      <li class="dashboard-hide"><input type="checkbox" /></li>
      <li class="dashboard-del"><i class="el-icon-close"></i></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'dialogDashbdList',
    props: ['isShowDashbdList', 'dashboardListData'],
    beforeMount() {

    }
  };
</script>

<style scoped lang="scss">
  .manage-dialog-dashboard{
    border-top: 1px solid rgb(233, 233, 233);
    .manage-dialog-item,.manage-dialog-list{
      display: flex;
    }
    .dashboard-name{
      width: 50%;
    }
    .dashboard-hide,.dashboard-del{
      width: 25%;
      cursor: pointer;
    }
    .dashboard-hide input{
      cursor: pointer;
    }
  }
</style>

