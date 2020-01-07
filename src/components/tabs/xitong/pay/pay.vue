<template>
    <div id="pay">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="在线支付设置" name="first">在线支付设置<todo-item></todo-item></el-tab-pane>
        <el-tab-pane label="卡密支付" name="second" @click="goTo('/km')">卡密支付</el-tab-pane>
        <el-tab-pane label="码支付" name="third" @click="goTo('/m')">码支付</el-tab-pane>
        <el-tab-pane label="支付宝" name="fourth" @click="goTo('/ali')">支付宝</el-tab-pane>
        <el-tab-pane label="幻兮支付" name="five" @click="goTo('/huanxi')">幻兮支付</el-tab-pane>
        <el-tab-pane label="微信支付" name="sixth" @click="goTo('/weixin')">微信支付</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "pay",
      components: {
        'todo-item': {
          template: '<el-tag type="success">标签二</el-tag>'
        }
      },
      data() {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        goTo(path) {
          this.$router.replace(path);
        }
      }
    }
</script>

<style scoped>

</style>
