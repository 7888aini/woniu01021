<template>
  <div id="fenlei">
  <!--搜索框-->
  <el-row>
    <el-col :span="3" class="grid">
      <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
    </el-col>
    <el-col :span="1" class="grid">
      <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--新增按钮-->
    <el-col :span="1" class="grid">
      <el-button type="info" icon="el-icon-circle-plus-outline" size="mini" round>新增</el-button>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--修改按钮-->
    <el-col :span="1" class="grid">
      <el-button type="primary" icon="el-icon-edit" size="mini" round>修改</el-button>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--全删按钮-->
    <el-col :span="1" class="grid">
      <el-button type="danger" icon="el-icon-delete" size="mini" round>全删</el-button>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--状态按钮-->
    <el-col :span="1" class="grid">
      <el-button type="warning" icon="el-icon-setting" size="mini" round>状态</el-button>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--转移按钮-->
    <el-col :span="1" class="grid">
      <el-button type="warning" icon="el-icon-s-promotion" size="mini" round>转移</el-button>
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
    <el-table-column prop="name" label="名称" width=100% sortable>
    </el-table-column>
    <el-table-column prop="statu" label="状态" width=100%>
    </el-table-column>
    <el-table-column prop="type" label="类型" width=100%>
    </el-table-column>
    <el-table-column prop="xu" label="排序" width=100%>
    </el-table-column>
    <el-table-column prop="name1" label="名称" width=100%>
    </el-table-column>
    <el-table-column prop="ename" label="英文名" width=100%>
    </el-table-column>
    <el-table-column prop="fl" label="分类页模板" width=100%>
    </el-table-column>
    <el-table-column prop="sx" label="筛选页模板" width=100%>
    </el-table-column>
    <el-table-column prop="nr" label="内容页模板" width=100%>
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

  </div>
</template>

<script>
    export default {
      name: "fenlei",
      data() {
        return {
          //表格数据
          tableData: [{
            name: '王小虎',
            statu:'',
            type:'',
            xu:'',
            name1:'',
            ename:'',
            fl:'',
            sx:'',
            nr:''
          }, {
            name: '王小虎',
            statu:'',
            type:'',
            xu:'',
            name1:'',
            ename:'',
            fl:'',
            sx:'',
            nr:''
          }, {
            name: '王小虎',
            statu:'',
            type:'',
            xu:'',
            name1:'',
            ename:'',
            fl:'',
            sx:'',
            nr:''
          }, {
            name: '王小虎',
            statu:'',
            type:'',
            xu:'',
            name1:'',
            ename:'',
            fl:'',
            sx:'',
            nr:''
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
