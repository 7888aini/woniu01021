<template>
  <div id="m">
    <div class="mline">
      <div class="line1" style="width: 30px">
        <hr>
      </div>
      <div>
        <p class="line1" style="font-size: 24px">码支付设置&nbsp;</p>
        <el-button class="line1" type="primary" plain>点击进入注册</el-button>
      </div>
      <div class="line1" style="width: 900px">
        <hr>
      </div>
    </div><br><br><br><br><br>

    <div><el-form :model="sizeForm" :rules="rules" ref="sizeForm" label-width="130px" class="demo-ruleForm">

      <div style="width: 550px">
        <el-form-item label="支付商家编号：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="40625"></el-input>
        </el-form-item></div>
      <div style="width: 550px">
        <el-form-item label="支付商家密钥：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="第三方卡密平台"></el-input>
        </el-form-item></div>
      <div style="width: 550px">
        <el-form-item label="商家收款平台：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="1：支付宝；2：QQ钱包；3：微信（多个用逗号分隔）"></el-input>
        </el-form-item></div>
      <div style="width: 550px">
        <el-form-item label="收款通知类型：" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="0表示及时到账 1则为商家代收款"></el-input>
        </el-form-item></div>

      <br>

      <div style="text-align: center;margin-right: 200px"><el-form-item>
        <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
        <el-button type="warning" @click="resetForm('sizeForm')">还原</el-button>
      </el-form-item></div>
    </el-form></div>
  </div>
</template>

<script>
  export default {
    name: "m",
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
    },
    methods: {
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
  #m{
    text-align: left;
    margin-left: 90px;
  }
  .line1{
    float: left;
    margin-top: 20px;
  }
</style>
