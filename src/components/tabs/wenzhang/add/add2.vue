<template>
  <div id="add2">
    <el-form ref="form" :model="form" label-width="80px">

      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>顶数量：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>踩数量：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">随机生成</el-button></div>
      </div>
     <br>
     <br>
     <br>
     <br>

      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>总人气：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>月人气：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>周人气：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>日人气：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>平均分：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>总评分：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>总评次：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>整数据积分：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>每页积分：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>独立模板：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <br>
      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>编辑人：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>来源：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>跳转URL：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <div>
        <div class="bt" style="width: 400px">
          <el-form-item>
            <el-input v-model="form.name" placeholder="非静态模式下可用">
              <template slot="prepend"><b>访问密码：</b></template>
            </el-input>
          </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>密码链接：</b></template>
            </el-input>
          </el-form-item></div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>



      <el-form-item>
        <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
        <el-button type="warning" @click="resetForm('sizeForm')">还原</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "add2",
    data() {
      return {
        color1:'#05fcd6',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
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
  #add2{
    text-align: left;
  }
  .bt{
    float: left;
  }
  .block{
    float: left;
  }
  .sel{
    float: left;
  }
</style>
