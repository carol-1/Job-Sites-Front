<template>
  <el-header>
    <span class="collapse" @click="handelCollapse">
      <i class="el-icon-s-fold"></i>
    </span>
    <div class="user-info">
      <i class="el-icon-chat-dot-square"></i>
      <i class="el-icon-full-screen"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
        当前用户<i class="el-icon-caret-bottom el-icon--right"></i>
    </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </el-header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handelCollapse(){
      this.$emit('handelCollapse')
    }
  }
}
</script>

<style scoped>
  .el-header {
    height: 60px;
    width: 100%;
    background-color: #5c7ce8;
    line-height: 60px;
    padding: 0px;
    display: flex;
  }
  .collapse {
    cursor: pointer;
    padding: 0px 20px;
    color: #FFFFFF;
  }
  .user-info {
    height: 60px;
    width:200px;
    line-height: 60px;
    margin-left: auto;
  }
  .user-info i {
    cursor: pointer;
    padding: 10px 15px;
    color: #FFFFFF;
  }
  .el-dropdown-link {
    color: #FFFFFF;
    cursor: pointer;
  }

</style>