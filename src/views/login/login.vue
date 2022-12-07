<template>
  <div>
    <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <div class="dowebok" id="dowebok">
      <div class="form-container sign-up-container">
        <form autocomplete="off" @submit.prevent="regist_btn" >
          <h1>注册</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>或使用邮箱注册</span>
          <input type="text" placeholder="姓名" v-model="name">
          <input type="email" placeholder="电子邮箱" v-model="email">
          <input type="password" placeholder="密码" v-model="password">
          <button>注册</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form autocomplete="off" @submit.prevent="login_btn" >
          <h1>登录</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>或使用您的帐号</span>
          <input type="email" placeholder="邮箱" v-model="email">
          <input type="password" placeholder="密码" v-model="password">
          <a>忘记密码？</a>
          <button >登录</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>已有帐号？</h1>
            <p>请使用您的帐号进行登录</p>
            <button class="ghost" id="signIn">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>没有帐号？</h1>
            <p>立即注册加入我们，和我们一起开始旅程吧</p>
            <button class="ghost" id="signUp">注册</button>
          </div>
        </div>
      </div>
    </div>

    </body>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "login",
  data(){
    return{
      email:"",
      name:"",
      password:"",
      user:{}
    }
  },
  methods:{
    login_btn(){
      let _this = this;
      axios.post("/login",{
        email:_this.email,
        password:_this.password
      }).then((r)=>{
        r = r.data;
        if(r.code === 200){
          let user = r.data;
          _this.user = user;
          console.log(user);
          localStorage.setItem("user",JSON.stringify(user));
          console.log(localStorage.getItem("user"));
          //this.$router.push("http://chenyangdu.xyz/cinema/home/")
          window.location.href = "http://chenyangdu.xyz/cinema/home?email="+user.email+"&name="+user.name+"&id="+user.id;
        }
      })
    },
    regist_btn(){
      let _this = this;
      axios.post("/regist",{
        name:_this.name,
        email:_this.email,
        password:_this.password
      }).then((r)=>{
        r = r.data;
        if(r.code === 200){
          this.$message.success("注册成功！");
          this.login_btn()
        }else{
          this.$message.error(r.msg)
        }
      })
    }
  },
  mounted() {
    var signUpButton = document.getElementById('signUp')
    var signInButton = document.getElementById('signIn')
    var container = document.getElementById('dowebok')

    signUpButton.addEventListener('click', function () {
      container.classList.add('right-panel-active')
    })

    signInButton.addEventListener('click', function () {
      container.classList.remove('right-panel-active')
    });
    // console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");

  }
}
</script>

<style scoped>
@import "login.css";
</style>
