<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col :span="24" class="header" id="header">
          <el-menu :default-active="currentTopMenu" class="el-menu-demo" style="background-color: #cacee6"
                   mode="horizontal"
                   @select="handleSelect">

            <el-menu-item index="1"><p style="width: 185px;text-align: left;font-size: 20px;color: #6fa3cb"
                                       class="el-icon-s-home"><b>Super Controller</b></p></el-menu-item>
            <el-menu-item index="1"><b>首页</b></el-menu-item>

            <el-menu-item index="2"><b>系统管理</b></el-menu-item>

            <el-menu-item index="3"><b>基础</b></el-menu-item>

            <el-menu-item index="4"><b>文章</b></el-menu-item>

            <el-menu-item index="5"><b>视频</b></el-menu-item>

            <el-menu-item index="6"><b>网址</b></el-menu-item>

            <el-menu-item index="7"><b>用户</b></el-menu-item>

            <el-menu-item index="8"><b>模板</b></el-menu-item>

            <el-menu-item index="9"><b>财务管理</b></el-menu-item>

            <!--<el-menu-item index="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>-->
            <!--<el-menu-item index="1"><img src="../../static/img/wn.png"
                                         style="padding-left:5px;padding-right: 5px;width: 70px;height: 100%;background-color: #cacee6">
            </el-menu-item>-->

            <el-menu-item index="10">
              <el-dropdown>
      <span class="el-dropdown-link">
        {{ username }}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-s-platform">锁屏操作</el-dropdown-item>
                  <el-dropdown-item @click.native="logout" icon="el-icon-menu">退出登录</el-dropdown-item>
                  <el-dropdown-item divided icon="el-icon-coffee-cup">劳逸结合</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
            <el-menu-item index="11">网站首页</el-menu-item>
            <el-menu-item index="12">清理缓存</el-menu-item>

          </el-menu>

          <div class="line"></div>

        </el-col>

      </el-header>
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button></el-radio-group>-->
      <el-container>
        <el-aside width="200px" style="margin-left: 20px" v-model="activeName">
          <el-col :span="4" class="aside">

            <el-menu class="el-menu-vertical-demo"
                     style="height:100vh;width:200px;float:left;overflow-y:auto;background-color: #DCDFE6"
                     @open="handleOpen"
                     @close="handleClose" :collapse="isCollapse"
                     :default-openeds="['1','2','3','4','5','6','7','8']">


              <el-submenu index="1" v-show="currentTopMenu == 1" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-s-promotion"></i>

                  <span style="font-size:18px"><b>首页</b></span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="1-1" @click="goTo('/welcome')">欢迎页面</el-menu-item>
                  <el-menu-item index="1-2">自定义菜单配置</el-menu-item>
                  <el-menu-item index="1-3">↓↓↓自定义菜单区域↓↓↓</el-menu-item>
                  <el-menu-item index="1-4">测试系统模块菜单</el-menu-item>
                </div>

              </el-submenu>

              <el-submenu index="2" v-show="currentTopMenu == 2" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px"><b>系统管理</b></span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="2-1">
                    <router-link to="/paraminstall">网站参数配置</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">SEO参数配置</el-menu-item>
                  <el-menu-item index="2-3">会员参数配置</el-menu-item>
                  <el-menu-item index="2-4" @click="goTo('/pingluns')">评论留言配置</el-menu-item>
                  <el-menu-item index="2-5">附件参数配置</el-menu-item>
                  <el-menu-item index="2-6">URL地址配置</el-menu-item>
                  <el-menu-item index="2-7">播放器参数配置</el-menu-item>
                  <el-menu-item index="2-8">采集参数配置</el-menu-item>
                  <el-menu-item index="2-9">站外入库配置</el-menu-item>
                  <el-menu-item index="2-10">开放API配置</el-menu-item>
                  <el-menu-item index="2-11" @click="goTo('/zhenghe')">整合登录配置</el-menu-item>
                  <el-menu-item index="2-12" @click="goTo('/pay')">在线支付配置</el-menu-item>
                  <el-menu-item index="2-13">微信对接配置</el-menu-item>
                  <el-menu-item index="2-14" @click="goTo('/email')">邮件发送配置</el-menu-item>
                  <el-menu-item index="2-15">短信发送配置</el-menu-item>
                  <el-menu-item index="2-16">定时任务配置</el-menu-item>
                </div>

              </el-submenu>
              <el-submenu index="3" v-show="currentTopMenu == 3" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">基础</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="3-1">分类管理</el-menu-item>
                  <el-menu-item index="3-2">专题管理</el-menu-item>
                  <el-menu-item index="3-3">友链管理</el-menu-item>
                  <el-menu-item index="3-4">留言管理</el-menu-item>
                  <el-menu-item index="3-5">评论管理</el-menu-item>
                  <el-menu-item index="3-6">附件管理</el-menu-item>
                </div>

              </el-submenu>
              <el-submenu index="4" v-show="currentTopMenu == 4" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">文章</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="4-1">文章数据</el-menu-item>
                  <el-menu-item index="4-2">添加文章</el-menu-item>
                  <el-menu-item index="4-3">已锁定文章</el-menu-item>
                  <el-menu-item index="4-4">未审核文章</el-menu-item>
                  <el-menu-item index="4-5">批量操作文章</el-menu-item>
                  <el-menu-item index="4-6">重名文章数据</el-menu-item>
                </div>

              </el-submenu>
              <el-submenu index="5" v-show="currentTopMenu == 5" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">视频</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="5-1">服务器组</el-menu-item>
                  <el-menu-item index="5-2">播放器</el-menu-item>
                  <el-menu-item index="5-3">下载器</el-menu-item>
                  <el-menu-item index="5-4">视频数据</el-menu-item>
                  <el-menu-item index="5-5">添加视频</el-menu-item>
                  <el-menu-item index="5-6">无地址视频</el-menu-item>
                  <el-menu-item index="5-7">已锁定视频</el-menu-item>
                  <el-menu-item index="5-8">未审核视频</el-menu-item>
                  <el-menu-item index="5-9">有分集剧情</el-menu-item>
                  <el-menu-item index="5-10">批量操作视频</el-menu-item>
                  <el-menu-item index="5-11">重名视频数据</el-menu-item>
                  <el-menu-item index="5-12">演员库</el-menu-item>
                  <el-menu-item index="5-13">角色库</el-menu-item>
                </div>

              </el-submenu>
              <el-submenu index="6" v-show="currentTopMenu == 6" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">网址</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="6-1">网址数据</el-menu-item>
                  <el-menu-item index="6-2">添加网址</el-menu-item>
                  <el-menu-item index="6-3">已锁定网址</el-menu-item>
                  <el-menu-item index="6-4">未审核网址</el-menu-item>
                  <el-menu-item index="6-5">批量操作网址</el-menu-item>
                  <el-menu-item index="6-6">重名网址数据</el-menu-item>
                </div>

              </el-submenu>

              <el-submenu index="7" v-show="currentTopMenu == 7" style="background-color: #f7ff5d;text-align:left">

                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">用户</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="7-1">管理员</el-menu-item>
                  <el-menu-item index="7-2">会员组</el-menu-item>
                  <el-menu-item index="7-3">会员</el-menu-item>
                  <el-menu-item index="7-4">充值卡</el-menu-item>
                  <el-menu-item index="7-5">会员订单</el-menu-item>
                  <el-menu-item index="7-6">访问日志</el-menu-item>
                  <el-menu-item index="7-7">积分日志</el-menu-item>
                  <el-menu-item index="7-8">提现记录</el-menu-item>
                </div>
              </el-submenu>

              <el-submenu index="8" v-show="currentTopMenu == 8" style="background-color: #f7ff5d;text-align:left">
                <template slot="title">

                  <i class="el-icon-location"></i>

                  <span style="font-size:18px">模板</span>

                </template>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="8-1">模板管理</el-menu-item>
                  <el-menu-item index="8-2">广告位管理</el-menu-item>
                  <el-menu-item index="8-3">标签向导</el-menu-item>
                </div>
              </el-submenu>
              <el-menu-item index="9" v-show="currentTopMenu == 9" style="background-color: #f7ff5d;text-align:left">

                <i class="el-icon-money"></i>

                <span style="font-size:18px">财务管理</span>
                <div style="background-color: #f7ff5d">
                  <el-menu-item index="9-1">入账查询</el-menu-item>
                  <el-menu-item index="9-2">支出记录</el-menu-item>
                  <el-menu-item index="9-3">导出表格</el-menu-item>
                </div>
              </el-menu-item>

            </el-menu>

          </el-col>
        </el-aside>
        <!--中心显示区-->
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>
<script>
  export default {
    name: 'main',
    data() {
      return {
        currentTopMenu: '1',
        username: 'admin',
        isCollapse: false,
        /*activeName: '/welcome',*/
        /*背景图*/
        note: {
          backgroundImage: "url(" + require("../../static/img/timg.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
        /*标签页*/
        editableTabsValue: '1',
        editableTabs: [{
          id: '1',
          content: 'Tab 1 content'
        }, {
          id: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,

        isTip: true
      }
    },
    methods: {
      handleSelect(index) {
        this.currentTopMenu = index;
      },
      /*退出登录*/
      logout: function () {
        this.$confirm('确认退出?', '提示', {})
          .then(() => {
            sessionStorage.removeItem('user');
            this.$router.push('/login');
          })
          .catch(() => {
          });
      },
      goTo(path) {
        this.$router.replace(path);
      }
    },
    mounted: function () {
      let user = sessionStorage.getItem('user');
      if (user) {
        this.username = user;
      }
    }
  }
</script>

<style>
  #app {
    margin-top: -10px;
    width: 100%;
    height: 20%;
  }
  element.style {
    background-color: rgb(202, 206, 230);
    height: 60px;
    width: 100%;
  }
  #app{text-align:center;}/*针对老式浏览器*/
  #app{margin:0 auto;width:100%;}/*要指定宽度*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .header,.aside{
    position:fixed;
    z-index: 999;
  }

</style>
