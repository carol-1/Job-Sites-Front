<template>
  <div class="header">
    <span class="collapse" @click="handelCollapse">
      <i class="el-icon-s-fold"></i>
    </span>
    <div class="user-info">
      <i class="el-icon-chat-dot-square"></i>
      <i class="el-icon-full-screen"  @click="handelFullScreen"></i>
      <el-dropdown  @command="handelCommand">
        <span class="el-dropdown-link">
        当前用户<i class="el-icon-caret-bottom el-icon--right"></i>
    </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="info">
            <i class="el-icon-user"></i>个人信息
          </el-dropdown-item>
          <el-dropdown-item command="password">
            <i class="el-icon-edit-outline"></i>修改密码
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <i class="el-icon-circle-close"></i>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
import screenfull from "screenfull"
export default {
  name: "Navbar",
  methods: {
    handelCollapse(){
      this.$emit('handelCollapse')
    },
    handelFullScreen(){
      screenfull.toggle();
    },
    handelCommand(type){
      console.log(type)
      if(type === "logout"){
        this.$confirm('确定要退出吗？','退出提示',).then(()=>{
          this.$router.push('/login')
        }).catch(()=>{});

      }
    }
  }
}
</script>

<style scoped>
  .header {
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