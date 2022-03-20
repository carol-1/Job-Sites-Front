<template>
  <div>
<!--    <<<因为使用了别人的组件，但是只想修改当前页面的样式而不影响到其他页面-->
    <div class="login-container">
      <div class="login-main">
        <div class="system-title">
          高校就业服务平台
        </div>
        <div class="box">
          <div class="title">系统登录</div>
          <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item prop="account">
              <el-input v-model="form.account" class="login-user" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.password" class="login-pwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="form.type" placeholder="请选择类型">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="login-btn" :loading="false">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      form:{
        account:'',
        password:'',
        type:0,
      },
      options:[{label:'管理员',value:0},{label:'企业',value:1},{label:'学生',value:2}],
      rules:{
        account:[{required:true,message:"用户名不能为空"}],
        password:[{required:true,message:"密码不能为空"}],
      }
    }
  },
  methods:{
    login(){
      this.$refs['loginForm'].validate(valid=>{
        if(valid){
          //用户登录操作
          this.$store.dispatch('login',this.form).then(res=>{
            if(res.code == 200){
              this.$router.push('/index');
            }
          })
        }
      });
    }
  }
}
</script>

<style scoped>
.login-container{
  width: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
}
.login-main{
  width: 100%;
  height: 100%;
  margin: auto;
  background: url('~@/assets/images/login-bg.png') no-repeat;
}
.system-title{
  font-size: 36px;
  font-weight: bold;
  color: #303133;
}
.show img{
  height: 100%;
  display: block;
  margin: 0 auto;
}

.box{
  width: 30%;
  padding: 20px 40px;
  float: right;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10%;
  margin-right: 4%;
}
.box .title{
  font-size: 18px;
  margin-bottom: 20px;
}
.login-btn{
  width: 100%;
  background-color: #4872FF;
  border: 0px;
}
.login-btn:hover{
  width: 100%;
  background-color: #195996;
  border: 0px;
}
.login-user >>> .el-input__inner{
  background: url('~@/assets/images/user.png') no-repeat center left;
  padding-left: 20px;
}
.login-pwd >>> .el-input__inner{
  background: url('~@/assets/images/password.png') no-repeat center left;
  padding-left: 20px;
}
</style>