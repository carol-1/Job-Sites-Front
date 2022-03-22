<template>
    <el-container>
      <Sidebar :isCollapse="isCollapse"></Sidebar>
      <el-container>
        <el-header>
          <Navbar @handelCollapse="handelCollapse"></Navbar>
        </el-header>
         <el-main>
           <el-breadcrumb separator-class="el-icon-arrow-right">
             <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
             <el-breadcrumb-item>用户管理</el-breadcrumb-item>
           </el-breadcrumb>
           <router-view class="rv"></router-view>
         </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
export default {
  name: "Index",
  components: {
    Sidebar,
    Navbar,
  },
  data(){
    return {
      isCollapse: false, //定义是否折叠的变量
    }
  },
  methods: {
    handelCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100% !important;
  background-color: #f2f2f2;
}
.el-main {
  padding: 0px !important;
}
.el-breadcrumb {
  background-color: #ffffff;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #FFFFFF84;
  box-sizing: border-box;
  padding-left: 20px;
}
.el-header {
  padding: 0px !important;
}
.rv {
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

</style>