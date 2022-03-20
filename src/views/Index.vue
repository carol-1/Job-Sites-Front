<template>
    <el-container class="el-container">
      <Sidebar :isCollapse="isCollapse"></Sidebar>
      <el-container>
       <Navbar @handelCollapse="handelCollapse"></Navbar>
        <el-main>Main</el-main>
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
    Navbar
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
  height: 100%;
}
</style>