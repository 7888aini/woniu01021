<template>
    <div id="pingluns">
      <el-form :model="sizeForm" :rules="rules" ref="sizeForm" label-width="180px" class="demo-ruleForm">
        <el-form-item label="留言本:" prop="name">
          <el-radio-group v-model="sizeForm.name" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否审核:"  prop="region">
          <el-radio-group v-model="sizeForm.region" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="登录留言:" prop="date1">
          <el-radio-group v-model="sizeForm.date1" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="验证码:" prop="date2">
          <el-radio-group v-model="sizeForm.date2" size="medium">
            <el-radio label="关闭"></el-radio>
            <el-radio label="开启"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div style="width: 350px">
        <el-form-item label="每页个数" prop="num" :rules="[
      { required: true, message: '每页个数不能为空'},
      { type: 'number', message: '个数必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off"></el-input>
        </el-form-item></div>
        <div style="width: 350px">
        <el-form-item label="时间间隔" prop="num" :rules="[
      { required: true, message: '时间间隔不能为空'},
      { type: 'number', message: '时间间隔必须为数字值'}
    ]">
          <el-input type="age" v-model.number="sizeForm.num" autocomplete="off"></el-input>
        </el-form-item></div>

          <el-form-item label="评论状态:">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio label="关闭"></el-radio>
              <el-radio label="开启"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否审核:">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio label="关闭"></el-radio>
              <el-radio label="开启"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="登录评论:">
            <el-radio-group v-model.number="sizeForm.num" size="medium">
              <el-radio label="关闭"></el-radio>
              <el-radio label="开启"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="验证码:">
            <el-radio-group v-model.number="sizeForm.num" size="medium">
              <el-radio label="关闭"></el-radio>
              <el-radio label="开启"></el-radio>
            </el-radio-group>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('sizeForm')">提交</el-button>
          <el-button @click="resetForm('sizeForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "pingluns",
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
#pingluns{
  text-align: left;
}
</style>
