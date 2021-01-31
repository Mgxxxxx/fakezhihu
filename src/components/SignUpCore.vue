<template>
  <el-card class="sign-content">
    <img src="~@/assets/images/logo.png" alt="logo.png" />
    <p class="slogen">FakeZhihu Project</p>
    <div class="register" v-show="nowStatus === 'register'">
      <el-form
        :model="registerForm"
        :rules="registerRules"
        ref="registerForm"
        label-width="0px"
      >
        <el-form-item class="no-label" prop="name">
          <el-input placeholder="请输入用户名" v-model="registerForm.name" />
        </el-form-item>
        <el-form-item class="no-label" prop="email">
          <el-input placeholder="请输入邮箱" v-model="registerForm.email" />
        </el-form-item>
        <el-form-item class="no-label" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="registerForm.password"
            type="password"
          />
        </el-form-item>
        <el-form-item class="no-label" prop="passwordEnsure">
          <el-input
            placeholder="请再次输入密码"
            v-model="registerForm.passwordEnsure"
            type="password"
          />
        </el-form-item>
        <el-form-item class="no-label" prop="submit">
          <el-button
            class="submit-btn"
            type="primary"
            @click="submitForm('registerForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <div class="footer register-footer clearfix">
        <span>
          注册即代表同意
          <a href="javascript:;">《Fake协议》</a>
          <a href="javascript:;">《隐私保护指引》</a>
        </span>
        <a href="javascript:;">注册机构号</a>
      </div>
    </div>
    <div class="login" v-show="nowStatus === 'login'">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item class="no-label" prop="username">
          <el-input placeholder="手机号或邮箱" v-model="loginForm.username" />
        </el-form-item>
        <el-form-item class="no-label" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            type="password"
          />
        </el-form-item>
        <div class="others mt-3 mb-1">
          <span>手机验证码登录</span>
          <span>忘记密码</span>
        </div>
        <el-form-item class="no-label" prop="submit">
          <el-button
            class="submit-btn"
            type="primary"
            @click="submitForm('loginForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="footer login-footer">
        <span>
          <a href="javascript:;">二维码登录</a>
          <a href="javascript:;">海外手机登录</a>
          <a href="javascript:;">社交帐号登录</a>
        </span>
      </div>
    </div>
    <div class="switcher mt-2">
      {{ tips[nowStatus].base }}
      <span
        @click="nowStatus = nowStatus === 'register' ? 'login' : 'register'"
      >
        {{ tips[nowStatus].link }}
      </span>
    </div>
  </el-card>
</template>

<script>
import request from "@/service";
import md5 from "md5";

export default {
  name: "SignUpCore",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!this.pwdReg.test(value)) {
        callback(new Error("用户密码需由数字/大写字母/小写字母，8位以上"));
      } else {
        if (this.registerForm.passwordEnsure !== "") {
          this.$refs.registerForm.validateField("passwordEnsure");
        }
        callback();
      }
    };
    const validatePassEnsure = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次密码输入不一致！"));
      } else {
        callback();
      }
    };
    return {
      pwdReg: /^[a-zA-Z0-9]{3}$/,
      nowStatus: "login",
      tips: {
        register: {
          base: "已有帐号?",
          link: "登录",
        },
        login: {
          base: "没有帐号?",
          link: "注册",
        },
      },
      registerForm: {
        email: "",
        password: "",
        passwordEnsure: "",
      },
      registerRules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        passwordEnsure: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePassEnsure, trigger: "blur" },
        ],
      },
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名或邮箱", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async register() {
      await request
        .post("/users/create", {
          name: this.registerForm.name,
          pwd: md5(this.registerForm.password),
          email: this.registerForm.email,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            this.$Message.success("注册成功");
            this.$router.push({ name: "Home" });
          } else {
            this.$Message.error(res.data.msg);
          }
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.nowStatus === "register") {
            console.log("触发注册方法");
            this.register();
          } else {
            console.log("触发登录方法");
            this.login();
          }
        } else {
          this.$Message.error("error submit!!!");
          return false;
        }
        return "";
      });
    },
    async login() {
      await request
        .post("/users/login", {
          name: this.loginForm.username,
          pwd: md5(this.loginForm.password),
        })
        .then((res) => {
          if (res.status === 200) {
            this.$Message.success("登录成功");
            this.$router.push({ name: "Home" });
          } else {
            this.$Message.error(res.data.msg);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.sign-content {
  display: flex;
  flex-direction: column;
  width: 400px;
  text-align: center;
  img {
    width: 49px;
  }
  .others {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    span {
      cursor: pointer;
    }
  }
  .submit-btn {
    width: 100%;
  }
  .footer {
    font-size: 12px;
    a {
      color: #8590a6;
    }
  }
  .register-footer {
    & > span {
      float: left;
    }
    & > a {
      float: right;
    }
  }
  .login-footer span {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .switcher {
    border-top: 1px solid #ececec;
    margin-bottom: -20px;
    height: 49px;
    line-height: 49px;
    span {
      cursor: pointer;
    }
  }
}
</style>
