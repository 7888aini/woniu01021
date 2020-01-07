<template>
    <div id="add1">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="参数：" style="font-family: Gabriola">
          <el-select v-model="form.region" placeholder="请选择分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="请选择推荐">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="已审核">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.region" placeholder="未锁定">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-checkbox label="更新时间" name="type"></el-checkbox>
        </el-form-item>

        <div>
        <div class="bt" style="width: 700px">
        <el-form-item>
          <el-input v-model="form.name">
            <template slot="prepend"><b>标题：</b></template>
          </el-input>
        </el-form-item></div>
        <div class="bt" style="margin-left: -50px">
        <el-form-item>
          <el-input v-model="form.name">
            <template slot="prepend"><b>副标题：</b></template>
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
                <template slot="prepend"><b>拼音：</b></template>
              </el-input>
            </el-form-item></div>
          <div class="bt">
            <el-form-item>
              <el-input v-model="form.name">
                <template slot="prepend"><b>首字母：</b></template>
              </el-input>
            </el-form-item></div>
          <div class="bt gl" style="margin-left: 60px">
            <div class="block">
              <el-tag type="info" size="medium" style="height: 40px;width: 100px;padding-top: 5px"><b>高亮(有默认值)</b></el-tag>
            </div>
                <div class="block">
                  <span class="demonstration"></span>
                  <el-color-picker v-model="color1"></el-color-picker>
                </div>
              </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div>
          <div class="bt" style="width: 700px">
            <el-form-item>
              <el-input v-model="form.name">
                <template slot="prepend"><b>TAG：</b></template>
              </el-input>
            </el-form-item></div>
          <div class="bt" style="margin-left: 50px"><el-checkbox label="自动生成" name="type"></el-checkbox></div>
        </div>
        <br>
        <div style="width: 700px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>备注：</b></template>
            </el-input>
          </el-form-item></div>

        <div>
          <el-form-item>
            <div class="sel" style="width: 620px"><el-input v-model="form.name" placeholder="如“变形金刚”1、2、3部ID分别为11,12,13或将每部都填“变形金刚”">
              <template slot="prepend"><b>关联视频：</b></template>
            </el-input></div>
            <div class="sel" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">查询数据</el-button></div>
          </el-form-item></div>

        <div>
          <el-form-item>
            <div class="sel" style="width: 620px"><el-input v-model="form.name" placeholder="如“变形金刚资讯”1、2、3部ID分别为11,12,13或将每部都填“变形金刚资讯”">
              <template slot="prepend"><b>关联文章：</b></template>
            </el-input></div>
            <div class="sel" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">查询数据</el-button></div>
          </el-form-item></div>

        <div style="width: 700px">
          <el-form-item>
            <el-input v-model="form.name">
              <template slot="prepend"><b>扩展分类：</b></template>
            </el-input>
          </el-form-item></div>

        <div>
          <el-form-item>
            <div class="sel" style="width: 620px"><el-input v-model="form.name">
              <template slot="prepend"><b>图片：</b></template>
            </el-input></div>
            <div class="sel" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">上传图片</el-button></div>
          </el-form-item></div>

        <div>
          <el-form-item>
            <div class="sel" style="width: 620px"><el-input v-model="form.name">
              <template slot="prepend"><b>缩略图：</b></template>
            </el-input></div>
            <div class="sel" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">上传图片</el-button></div>
          </el-form-item></div>

        <div>
          <el-form-item>
            <div class="sel" style="width: 620px"><el-input v-model="form.name">
              <template slot="prepend"><b>海报图：</b></template>
            </el-input></div>
            <div class="sel" style="margin-left: 50px"><el-button @click.prevent="select(domain)" type="primary">上传图片</el-button></div>
          </el-form-item></div>

        <div style="width: 700px">
          <el-form-item>
            <el-input type="textarea" v-model="form.desc" placeholder="请在此处输入简介（不填写将自动从第一页详情里获取前100个字）">
            </el-input>
          </el-form-item></div>



        <el-form-item>
          <el-button type="primary" @click="submitForm('sizeForm')">保存</el-button>
          <el-button type="warning" @click="resetForm('sizeForm')">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "add1",
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
#add1{
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
