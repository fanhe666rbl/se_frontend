<template>
  <div>
    <Header></Header>
    <div style="margin: 100px auto;max-width: 500px;">
      <div style="font-size: 20px;margin-bottom: 30px;">登录</div>
      <el-row>
        <el-col :span="4" style="margin-top: 8px;">用户名：</el-col>
        <el-col :span="20"><el-input placeholder="请输入用户名" v-model="username"></el-input></el-col>
      </el-row>
      <el-row style="margin-top: 30px;">
        <el-col :span="4" style="margin-top: 8px;">密码：</el-col>
        <el-col :span="20"><el-input placeholder="请输入密码" show-password v-model="password"></el-input></el-col>
      </el-row>
      <el-button style="margin-top: 30px;" type="primary" @click="login">登录</el-button>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Login",
  components:{
    Header
  },
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    login(){
      console.log(this.username,this.password);
      this.axios.post('/api/user/login/',{
        username:this.username,
        password:this.password,
      }).then(res=>{
        console.log(res)
        if(res.status === 200){
          window.localStorage.setItem("token",res.data.token)
          this.$router.push('/admin')
        }else{
          this.$notify.error({
            title: '错误',
            message: '用户名或密码错误'
          });
        }
      }).catch(e=>{
        this.$notify.error({
          title: '错误',
          message: '用户名或密码错误'
        });
      })
    }
  }
}
</script>

<style scoped>
</style>
