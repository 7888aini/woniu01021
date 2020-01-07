<template>
  <div id="fenlei">
    <!--搜索框-->
    <el-row>
      <div style="margin-left: 360px">
      <!--选择状态-->
      <el-col :span="2" class="grid">
        <el-dropdown>
          <el-button type="primary">
           选择状态<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>未审核</el-dropdown-item>
            <el-dropdown-item>已审核</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col><el-col :span="1">&nbsp;&nbsp;</el-col>
      <!--选择模板-->
      <el-col :span="2" class="grid">
        <el-dropdown>
          <el-button type="primary">
            选择模板<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>视频</el-dropdown-item>
            <el-dropdown-item>文章</el-dropdown-item>
            <el-dropdown-item>角色</el-dropdown-item>
            <el-dropdown-item>专题</el-dropdown-item>
            <el-dropdown-item>演员</el-dropdown-item>
            <el-dropdown-item>网络</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col><el-col :span="1">&nbsp;&nbsp;</el-col>
      <!--选择举报-->
      <el-col :span="2" class="grid">
        <el-dropdown>
          <el-button type="primary">
            选择举报<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>未举报</el-dropdown-item>
            <el-dropdown-item>已举报</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col><el-col :span="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
      <el-col :span="3" class="grid">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1" class="grid">
        <el-button type="success" icon="el-icon-search">搜索</el-button>
      </el-col>
      </div>
      <br>
      <br>
      <br>
      <!--删除按钮-->
      <el-col :span="1" class="grid">
        <el-button type="primary" icon="el-icon-edit" round>删除</el-button>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <!--状态按钮-->
      <el-col :span="1" class="grid">
        <el-button type="warning" icon="el-icon-setting" round>状态</el-button>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <!--全删按钮-->
      <el-col :span="1" class="grid">
        <el-button type="danger" icon="el-icon-delete" round>清空</el-button>
      </el-col>
    </el-row>
    <br>
    <!--表格数据及操作-->
    <el-table :data="tableData" border style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark">
      <!--勾选框-->
      <el-table-column type="selection" width="55">
      </el-table-column>
      <!--索引-->
      <el-table-column type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column prop="mk" label="模块" width=100% sortable>
      </el-table-column>
      <el-table-column prop="statu" label="状态" width=100%>
      </el-table-column>
      <el-table-column prop="pl" label="评论内容" width='500'>
      </el-table-column>
      <el-table-column label="编辑" width="100">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除" width="100">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <br>
    <!--分页条-->
    <el-pagination background layout="prev, pager, next" :total="99">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "fenlei",
    data() {
      return {
        //表格数据
        tableData: [{
          mk: '电影',
          statu:'',
          pl:'祝小王子生日快乐，健康成长'
        }, {
          mk: '王小虎',
          statu:'',
          pl:'祝小王子生日快乐，健康成长'
        }, {
          mk: '王小虎',
          statu:'',
          pl:'祝小王子生日快乐，健康成长'
        }, {
          mk: '王小虎',
          statu:'',
          pl:'祝小王子生日快乐，健康成长'
        }],
        //查询输入框数据
        input: '',
        //导航条默认选项
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      indexMethod(index) {
        return index;
      }
    }
  }
</script>

<style scoped>
  #fenlei {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
