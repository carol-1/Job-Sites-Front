<template>
  <el-aside :width="isCollapse?'64px':'150px'">
    <div class="logo">
      <img src="~@/assets/logo.png" />
         寻才就业
    </div>
      <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#FFFFFF"
          style="border: 0px"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          default-active="1-1">
<!--          default-active默认选中-->
          <el-menu-item index="1-1">
            <i class="el-icon-s-home"></i>
            <span slot="title">分组一</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-s-home"></i>
            <span slot="title">分组一</span>
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-s-home"></i>
            <span slot="title">分组一</span>
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-s-home"></i>
            <span slot="title">分组一</span>
          </el-menu-item>
          <el-menu-item index="1-5">
            <i class="el-icon-s-home"></i>
            <span slot="title">分组一</span>
          </el-menu-item>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Sidebar",
  props:['isCollapse'],
  methods: {

    }
}
</script>

<style scoped>
   .el-aside {
     background-color: #545c64;
     transition: width .3s;
   }
   .logo {
     height: 60px;
     width: 200px;
     line-height: 60px;
     font-size: 18px;
     color: #FFFFFF;
     font-weight: 700;
     padding-left: 70px;
   }
   .logo img {
     position: absolute;
     width: 45px;
     height: 45px;
     left: 10px;
     top: 7px;
   }
</style>