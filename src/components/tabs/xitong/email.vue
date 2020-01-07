<template>
    <div id="email">
      <div><el-tag type="danger" style="height: 60px;margin-left: 100px;width: 900px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">提示信息:<br>发送邮件请开启openssl扩展库，否则可能发送失败</el-tag>
      </div><br>
      <el-form :model="sizeForm" :rules="rules" ref="sizeForm" label-width="180px" class="demo-ruleForm">
        <div style="width: 450px">
          <el-form-item label="服务器:" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务器"></el-input>
          </el-form-item></div>
        <div style="width: 450px">
          <el-form-item label="端口:" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp端口"></el-input>
          </el-form-item></div>
        <div style="width: 450px">
          <el-form-item label="帐号:" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务帐号"></el-input>
          </el-form-item></div>
        <div style="width: 450px">
          <el-form-item label="密码:" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="smtp服务密码"></el-input>
          </el-form-item></div>
        <div style="width: 450px">
          <el-form-item label="昵称:" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="发件人昵称"></el-input>
          </el-form-item></div>
        <div>
        <div class="te" style="width: 450px">
          <el-form-item label="测试地址:" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
            <el-input type="age" v-model.number="sizeForm.num" autocomplete="off" placeholder="测试邮箱"></el-input>
          </el-form-item></div>
        <div class="te"><el-button type="primary">发送测试邮件</el-button></div>
        </div>
        <br>
        <br>
        <br>

        <div style="margin-right:330px;text-align: center"><el-form-item>
          <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
          <el-button type="warning" @click="resetForm('sizeForm')">还原</el-button>
        </el-form-item></div>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: "email",
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
  #email{
    text-align: left;
  }
  .te{
    float: left;
  }
</style>
