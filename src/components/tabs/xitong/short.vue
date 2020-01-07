<template>
  <div id="short">
    <div><el-tag type="danger" style="height: 380px;margin-left: 80px;width: 1150px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);color: #ff54df">提示信息:<br>
      请务必按照短信接口服务商的要求做好短信签名和短信内容的设置。<br>
      腾讯云短信：https://cloud.tencent.com/product/sms<br>
      腾讯云短信模板例子：<br>
      尊敬的用户，您的注册会员验证码为：{1}，请勿泄漏于他人！<br>
      验证码为：{1}，您正在绑定手机，若非本人操作，请勿泄露。<br>
      验证码为：{1}，您正在进行密码重置操作，如非本人操作，请忽略本短信！<br>
      阿里云短信：https://www.aliyun.com/product/sms<br>
      阿里云短信模板例子：<br>
      尊敬的用户，您的注册会员验证码为：${code}，请勿泄漏于他人！<br>
      验证码为：${code}，您正在绑定手机，若非本人操作，请勿泄露。<br>
      验证码为：${code}，您正在进行密码重置操作，如非本人操作，请忽略本短信！</el-tag>
    </div><br>
    <el-form :model="sizeForm" :rules="rules" ref="sizeForm" label-width="200px" class="demo-ruleForm">
      <div>
        <el-form-item label="服务商" prop="region">
          <el-select v-model="sizeForm.region" placeholder="请选择服务商">
            <el-option label="阿里云短信" value="ali"></el-option>
            <el-option label="腾讯云短信" value="tengxun"></el-option>
            <el-option label="聚合短信" value="juhe"></el-option>
          </el-select>
        </el-form-item></div>

      <div style="width: 650px">
        <el-form-item label="appid：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="腾讯云对应AppId，阿里云对应KeyId"></el-input>
        </el-form-item></div>
      <div style="width: 650px">
        <el-form-item label="appkey：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="s腾讯云对应AppKey，阿里云对应KeySecret"></el-input>
        </el-form-item></div>

      <div style="width: 650px">
        <el-form-item label="短信签名：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务密码"></el-input>
        </el-form-item></div>
      <div style="width: 650px">
        <el-form-item label="注册模板编号：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="模板编号需要在服务商短信控制台中申请"></el-input>
        </el-form-item></div>

        <div style="width: 650px">
          <el-form-item label="绑定模板编号：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="模板编号需要在服务商短信控制台中申请"></el-input>
          </el-form-item></div>

      <div style="width: 650px">
        <el-form-item label="找回模板编号：" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="模板编号需要在服务商短信控制台中申请"></el-input>
        </el-form-item></div>
      <br>
      <br>
      <br>

      <div style="margin-right:300px;text-align: center"><el-form-item>
        <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
        <el-button type="warning" @click="resetForm('sizeForm')">还原</el-button>
      </el-form-item></div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "short",
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
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
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
  #short{
    text-align: left;
  }
  .te{
    float: left;
  }
</style>
