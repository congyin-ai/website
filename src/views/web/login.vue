<template>
  <div class="login">
    <AwHeader></AwHeader>
    <div class="container" :class="{ 'log-in': isLogIn, active: isFormActive }">
      <div class="box"></div>
      <div class="container-forms">
        <div class="container-info">
          <div class="info-item">
            <div class="table">
              <div class="table-cell">
                <p>{{ $t("login.title2") }}</p>
                <button class="btn" @click="toggleContainer">
                  {{ $t("login.login") }}
                </button>
              </div>
            </div>
          </div>
          <div class="info-item">
            <div class="table">
              <div class="table-cell">
                <p>{{ $t("login.title1") }}</p>
                <button class="btn" @click="toggleContainer">
                  {{ $t("login.signup") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container-form">
          <div class="form-item log-in">
            <div class="table">
              <div class="table-cell" v-show="flag">
                <div class="title1">
                  <h2>{{ $t("login.login1") }}</h2>
                  <h3 class="switch">
                    <a href="#" @click.prevent="switchlogin"
                      >{{ $t("login.login2") }}>></a
                    >
                  </h3>
                </div>
                <input
                  name="username"
                  :placeholder="$t('login.username')"
                  type="text"
                  v-model="passwordform.username"
                /><input
                  name="Password"
                  :placeholder="$t('login.password')"
                  type="Password"
                  v-model="passwordform.password"
                />
                <div>
                  <input
                    type="checkbox"
                    v-model="rememberPassword"
                    class="checkbox"
                  />&nbsp<span>{{ $t("login.remember") }}</span>
                </div>
                <div class="btn" @click="execlogin()">
                  {{ $t("login.login") }}
                </div>
              </div>
              <div class="table-cell" v-show="!flag">
                <div class="title1">
                  <h2>{{ $t("login.login2") }}</h2>
                  <h3 class="switch">
                    <a href="#" @click.prevent="switchlogin"
                      >{{ $t("login.login1") }}>></a
                    >
                  </h3>
                </div>
                <input
                  name="tele"
                  :placeholder="$t('login.tele')"
                  type="number"
                  v-model="vcodeform.tele"
                />
                <div class="vcode">
                  <el-input
                    :placeholder="$t('login.verifyCode')"
                    type="number"
                    v-model="vcodeform.vcode"
                  ></el-input>

                  <el-button
                    @click="getVerCode('login')"
                    :disabled="disable"
                    style="font-size: 10px"
                    >{{ $t("login.getCode") }}</el-button
                  >
                </div>
                <div class="btn" @click="execlogin()">
                  {{ $t("login.login") }}
                </div>
              </div>
            </div>
          </div>
          <div class="form-item sign-up">
            <div class="table">
              <div class="table-cell">
                <div class="title1">
                  <h2>{{ $t("login.signuptitle") }}</h2>
                </div>
                <el-form
                  :model="registryform"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="30.5%"
                >
                  <el-form-item prop="username">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.username')"
                      type="text"
                      v-model="registryform.username"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.password')"
                      type="password"
                      v-model="registryform.password"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="company">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.com')"
                      v-model="registryform.company"
                      type="text"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="userRealName">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.fullname')"
                      v-model="registryform.userRealName"
                      type="text"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="email">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.email')"
                      v-model="registryform.email"
                      type="text"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="phone">
                    <el-input
                      class="valid"
                      :placeholder="$t('login.tele')"
                      v-model="registryform.phone"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div class="vcode">
                  <el-input
                    :placeholder="$t('login.verifyCode')"
                    type="number"
                    v-model="registryform.smsCode"
                  ></el-input>

                  <el-button
                    @click="getVerCode('signup')"
                    :disabled="disable"
                    style="font-size: 10px"
                    >{{ $t("login.getCode") }}</el-button
                  >
                </div>
                <div class="btn" @click="execsignup()">
                  {{ $t("login.signup") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AwHeader from "../../components/web/public/Header";
// import validateForm from "../../components/web/validateForm"
import { vcodeLogin, getVerifyCode, registry, getInfo } from "@/api/auth";
// import router from '@/router'
export default {
  name: "login",
  data() {
    return {
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 16, message: "用户名长度应为5-16位", trigger: "blur" },
          {
            pattern: /^[^!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,
            message: "用户名不能包含特殊字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "密码长度应为8-16位", trigger: "blur" },
          {
            pattern: /^[^!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,
            message: "密码不能包含特殊字符",
            trigger: "blur",
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/,
            message: "密码必须包含数字和字母",
            trigger: "blur",
          },
        ],
        // company: [{ validator: validUsername, trigger: "blur" }],
        userRealName: [
          { required: true, message: "真实姓名不能为空", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
      },
      isLogIn: false,
      isFormActive: false,
      flag: true,
      rememberPassword: false,
      passwordform: {
        username: "",
        password: "",
      },
      vcodeform: {
        vcode: "",
        tele: "",
      },
      registryform: {
        username: "",
        password: "",
        company: "",
        userRealName: "",
        email: "",
        phone: "",
        smsCode: "",
      },
      disable: false,
      buttonName: this.$t("login.getCode"),
      count: 59,
    };
  },
  components: {
    AwHeader,
    // validateForm
  },

  methods: {
    toggleContainer() {
      this.isLogIn = !this.isLogIn;
    },
    activateContainer() {
      this.$store.dispatch("GetInfo").then((res) => {
        if (res.data.code == 200) {
          this.isFormActive = true;
          setTimeout(() => {
            this.$nextTick(() => {
              this.$router.push("/profile");
            });
          }, 1500);
        }
      });
    },
    switchlogin() {
      this.flag = !this.flag;
    },
    execlogin() {
      // 执行登录逻辑
      if (this.flag == true) {
        this.getSavedLoginfo();
        const loginform = {};
        loginform.username = this.passwordform.username;
        loginform.password = this.passwordform.password;
        this.$store.dispatch("PasswordLogin", loginform).then((res) => {
          this.activateContainer();
        });
      } else {
        const vcodeform = {};
        vcodeform.tele = this.vcodeform.tele;
        vcodeform.vcode = this.vcodeform.vcode;
        this.$store.dispatch("VcodeLogin", vcodeform).then((res) => {
          this.activateContainer();
        });
      }
      // 其他登录逻辑...
    },
    execsignup() {
      registry(this.registryform).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("注册成功");
          const loginform = {};
          loginform.username = this.registryform.username;
          loginform.password = this.registryform.password;
          this.$store.dispatch("PasswordLogin", loginform).then(() => {
            this.activateContainer();
          });
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    disableBtn() {
      if (this.disable == true) {
        this.$message({
          message: "请勿重复点击",
          type: "warning",
        });
      } else {
        var timeout = setInterval(() => {
          if (this.count < 1) {
            this.disable = false;
            this.buttonName = "获取验证码";
            this.count = 59;
            clearInterval(timeout);
          } else {
            this.disable = true;
            this.buttonName = this.count-- + "s后重发";
          }
        }, 1000);
      }
    },
    getSavedLoginfo() {
      if (this.rememberPassword) {
        // 如果勾选了记住密码，则将用户名和记住密码的状态保存到本地存储
        localStorage.setItem(
          "rememberPassword",
          this.rememberPassword.toString()
        );
        localStorage.setItem("username", this.passwordform.username);
        localStorage.setItem("password", this.passwordform.password);
      } else {
        // 否则，清除本地存储中保存的用户名和记住密码的状态
        localStorage.removeItem("rememberPassword");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
    },
    getVerCode(type) {
      if (type == "login") {
        console.log("*", this.vcodeform.tele.length);
        if (this.vcodeform.tele == "") {
          this.$message({
            message: "手机号不能为空",
            type: "warning",
          });
        } else if (this.vcodeform.tele.length != 11) {
          this.$message({
            message: "请输入11位的手机号码",
            type: "warning",
          });
        } else {
          getVerifyCode(this.vcodeform.tele, 1).then((res) => {
            console.log(`output->res`, res);
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.disableBtn();
            } else if (res.data.code == 500) {
              this.$message.warning(res.data.msg + "，请您先注册！");
              this.toggleContainer();
            }
          });

          // console.log("点击了", this.disable);
        }
      } else {
        console.log("*", this.registryform.phone.length);
        if (this.registryform.phone == "") {
          this.$message({
            message: "手机号不能为空",
            type: "warning",
          });
        } else if (this.registryform.phone.length != 11) {
          this.$message({
            message: "请输入11位的手机号码",
            type: "warning",
          });
        } else {
          getVerifyCode(this.registryform.phone, 0).then((res) => {
            // console.log(`output->res`, res);
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.disableBtn();
            } else {
              this.$message.warning(res.data.msg);
            }
          });

          // console.log("点击了", this.disable);
        }
      }
    },
  },
  mounted() {
    const rememberPassword = localStorage.getItem("rememberPassword");
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (rememberPassword && savedUsername) {
      this.rememberPassword = rememberPassword === "true";
      this.passwordform.username = savedUsername;
      this.passwordform.password = savedPassword;
    } //记住密码
  },
};
</script>

<style lang="less" scoped>
@charset "UTF-8";
// @import url(x.css);
.login {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  background-color: #5356ad;
  overflow: hidden;
}
.title1 {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  // margin-bottom: 10px;
  margin-left: 20%;
  margin-top: -15%;
  // text-align:center
}
.el-form-item {
  width: 80%;
  margin-left: -2%;
  // height: 30px;
}

.checkbox {
  // margin-top: 2%;
  margin-left: 50%;
  transform: scale(2, 2);
  // height: 20px;
  // width: 20px;
  // vertical-align: bottom;
}

.switch {
  margin-left: 50%;
  font-size: 20px;
}

.vcode {
  display: flex;
  width: 55%;
  height: 5.5%;
  margin-left: 22.5%;
}
.el-input /deep/ .el-input__inner {
  height: 100% !important;
  border-width: 1px;
  border-color: rgb(118, 118, 118);
  border-radius: 0px;
  font-size: 15px;
  color: black;
}
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
::v-deep input[type="number"] {
  -moz-appearance: textfield !important;
}

.valid {
  height: 36.3px;
}

.table {
  display: table;
  width: 100%;
  height: 100%;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
//背景板hw
.container {
  position: relative;
  width: 50%;
  margin: 30px auto 0;
  height: 50%;
  background-color: #999ade;
  top: 10%;
  margin-top: 15vh;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .box {
  position: absolute;
  left: 0;
  top: 0; //container右下小角位置
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container .box:before,
.container .box:after {
  content: " ";
  position: absolute;
  left: 200px; //右侧划片的位置 before
  top: 60px;
  background-color: #9297e0;
  transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);
  width: 700px; //右侧划片的大小
  height: 400px;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .box:after {
  background-color: #a5aae4;
  top: 30px;
  left: 80px; //左侧划片的大小位置 before
  width: 700px;
  height: 400px;
}
.container .container-forms {
  position: relative;
}
.container .btn {
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  width: 40%; //按钮宽度
  color: #fff;
  background-color: #ff73b3;
  opacity: 1;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .btn:hover {
  opacity: 0.7;
}
.container .btn,
.container input:not([type="checkbox"]) {
  padding: 1.5% 2%;
  // border: 30px;
}
.container input:not([type="checkbox"]) {
  margin: 0 auto 20px;
  display: block;
  width: 50%; //input width
  height: 3%;
  font-size: 15px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.container .container-forms .container-info {
  text-align: left;
  font-size: 0;
}
.container .container-forms .container-info .info-item {
  text-align: center;
  font-size: 26px; //两个按钮字体大小
  width: 50%;
  margin-top: 10%;
  height: 20%; //两个按钮的位置
  display: inline-block;
  vertical-align: top;
  color: #fff;
  opacity: 1;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.container .container-forms .container-info .info-item p {
  font-size: 40px;
  margin: 30px; //两边title
}
.container .container-forms .container-info .info-item .btn {
  background-color: transparent;
  border: 1px solid #fff;
}
.container .container-forms .container-info .info-item .table-cell {
  padding-right: 25px;
}
.container
  .container-forms
  .container-info
  .info-item:nth-child(2)
  .table-cell {
  padding-left: 55px;
  padding-right: 0;
}
//移动页面
.container .container-form {
  overflow: hidden;
  position: absolute;
  left: 10%; //移动页面的位置
  top: -30%;
  width: 45%;
  height: 260%; //移动页面的宽高
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .container-form:before {
  content: "✔";
  position: absolute;
  left: 160px;
  top: 100px;
  color: #5356ad;
  font-size: 250px;
  opacity: 0;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .container-form .btn {
  position: relative;
  box-shadow: 0 0 10px 1px #ff73b3;
  margin-top: 40px; //按钮margin-top
}
.container .form-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.container .form-item.sign-up {
  position: absolute;
  left: -100%;
  opacity: 0;
}
.container.log-in .box:before {
  position: absolute;
  left: 90px;
  top: 12px;
  height: 400px; //点击之后右侧滑块大小位置
}
.container.log-in .box:after {
  top: 42px;
  left: 192px;
  width: 700px;
  height: 400px; //点击之后左侧滑块大小位置
}
//点击之后移动页面位置
.container.log-in .container-form {
  left: 45%;
}
.container.log-in .container-form .form-item.sign-up {
  left: 0;
  opacity: 1;
}
.container.log-in .container-form .form-item.log-in {
  left: -100%;
  opacity: 0;
}
.container.active {
  width: 260px;
  height: 140px; //整体的宽高位置
  margin-top: 10%;
}
.container.active .container-form {
  left: 30px;
  top: -12%;
  width: 200px; //对号框的宽高位置
  height: 200px;
}
.container.active .container-form:before {
  content: "✔";
  position: absolute;
  left: 51px;
  top: 5px; //对号的top
  color: #5356ad;
  font-size: 130px;
  opacity: 1;
}

.container.active h2,
.container.active a,
.container.active span,
.container.active input,
.container.active .btn,
.container.active .el-input,
.container.active .el-button,
.container.active .info-item {
  display: none;
  opacity: 0;
  padding: 0px;
  margin: 0 auto;
  height: 0;
}
.container.active .form-item {
  height: 100%;
}
.container.active .container-forms .container-info .info-item {
  height: 0%;
  opacity: 0;
}
</style>
