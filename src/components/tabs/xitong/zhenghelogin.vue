<template>
    <div id="zhenghe">
      <div><el-tag type="danger" style="height: 130px;width: 900px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">提示信息:<br>
        1, QQ登录地址/index.php/user/oauth/?type=qq<br>
        2, 微信登录地址/index.php/user/oauth/?type=weixin<br>
        3, 回调地址/index.php/user/logincallback/?type=qq</el-tag>
      </div><br>

      <div class="qqline">
        <div class="line1" style="width: 30px">
          <hr>
        </div>
        <div>
          <p class="line1" style="font-size: 24px">QQ登录&nbsp;&nbsp;</p>
          <el-button class="line1">点击进入注册</el-button>
        </div>
        <div class="line1" style="width: 900px">
          <hr>
        </div>
      </div><br><br><br><br><br>
      <div><el-form :model="sizeForm" :rules="rules" ref="sizeForm" label-width="110px" class="demo-ruleForm">
        <el-form-item label="状态：" prop="name">
          <el-radio-group v-model="sizeForm.name" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>

        <div style="width: 900px">
          <el-form-item label="APP_KEY：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务器"></el-input>
          </el-form-item></div>

        <div style="width: 900px">
          <el-form-item label="APP_SECRET：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp端口"></el-input>
          </el-form-item></div>




        <div class="wxline">
          <div class="line1" style="width: 30px">
            <hr>
          </div>
          <div>
            <p class="line1" style="font-size: 23px">微信登录&nbsp;&nbsp;</p>
            <el-button class="line1">点击进入注册</el-button>
          </div>
          <div class="line1" style="width: 900px">
            <hr>
          </div>
        </div><br><br><br><br><br>
        <el-form-item label="状态：" prop="name">
          <el-radio-group v-model="sizeForm.name" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>

        <div style="width: 900px">
          <el-form-item label="APP_KEY：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务器"></el-input>
          </el-form-item></div>

        <div style="width: 900px">
          <el-form-item label="APP_SECRET：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp端口"></el-input>
          </el-form-item></div>


        <br>

        <div style="text-align: center;margin-right: 100px"><el-form-item>
          <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
          <el-button type="warning" @click="resetForm('sizeForm')">还原</el-button>
        </el-form-item></div>
      </el-form></div>




    </div>
</template>

<script>
    export default {
      name: "zhenghelogin",
      data() {
        return {
          sizeForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            num: ''
          },
          rules: {
            name: [
              {required: true, message: '请输入活动名称', trigger: 'blur'},
              {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
            ],
            region: [
              {required: true, message: '请选择活动区域', trigger: 'change'}
            ],
            date1: [
              {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
            ],
            date2: [
              {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
            ],
            type: [
              {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
            ],
            resource: [
              {required: true, message: '请选择活动资源', trigger: 'change'}
            ],
            desc: [
              {required: true, message: '请填写活动形式', trigger: 'blur'}
            ]
          }
        };
      },methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
#zhenghe{
text-align: left;
  margin-left: 90px;
}
  .line1{
    float: left;
    margin-top: 20px;
  }
</style>
