<template>
  <div class="manage-dialog-rolelist" v-show="isShowRoleList">
    权限列表内容
  </div>
</template>

<script>
  export default {
    name: 'dialogRoleList',
    props: ['isShowRoleList']
  };
</script>

<style lang="scss" scoped>
  .manage-dialog-rolelist{
    border-top: 1px solid rgb(233, 233, 233);
  }
</style>


