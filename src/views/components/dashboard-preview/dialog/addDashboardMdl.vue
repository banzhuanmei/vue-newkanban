<template>
  <div class="dialog-add" >
    <el-dialog title="添加dashboard" :visible="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'addDashboardMdl',
    props: ['addDashbdMdlVisible'],
    data() {
      return {
        formLabelWidth: '120px',
        form: {
          name: ''
        }
      };
    },
    computed: {
      dialogFormVisible: {
        get() {
          return this.addDashbdMdlVisible;
        },
        set(val) {
          this.$emit('update:addDashbdMdlVisible', val);
        }
      }
    }
  };
</script>

<style scoped>

</style>

