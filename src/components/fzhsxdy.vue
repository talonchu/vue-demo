<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item>系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>系统基础资料设置</el-breadcrumb-item>
        <el-breadcrumb-item>辅助核算项定义</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <el-container style="margin-top: 15px">
      <div style="width:25%;" class="divborder">
        <el-button type="text" :disabled="disabledAll"><i class="el-icon-edit-outline" :style="{'cursor':!disabledAll ? 'pointer' : ''}" style="margin-right: 10px;margin-top: 10px;" @click="addItem()">&nbsp;添加</i></el-button>
        <el-button type="text" :disabled="disabledAll"><i class="el-icon-delete" style="margin-right: 5px">&nbsp;删除</i></el-button>
        <i style="margin-right: 5px">|</i>
        <el-button type="text" :disabled="disabledAll"><i class="el-icon-circle-plus-outline" style="margin-right: 10px">&nbsp;启用</i></el-button>
        <el-button type="text" :disabled="disabledAll"><i class="el-icon-remove-outline" style="margin-right: 10px">&nbsp;停用</i></el-button>
        <el-input placeholder="请输入内容" v-model="filterText" class="input-with-select" style="margin-top:10px;width:99%">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <ul>
          <li v-for="(item,index) in data1" :key="index">
            <el-tree
              :data="item.data"
              show-checkbox
              node-key="id"
              :filter-node-method="filterNode"
              ref="tree2"
              :default-expand-all="true"
              @node-click="nodeClick">
            </el-tree>
          </li>
        </ul>
      </div>
      <div style="width:75%;" class="divborderleft">
        <el-button type="text" disabled><i class="el-icon-edit" style="margin-right: 15px;margin-top: 10px"></i>编辑</el-button>
        <p>辅助项基本信息</p>
        <div>
          <el-form :inline="true" :label-position="labelPosition" label-width="100px">
                <el-form-item label="来源">
                  <el-select v-model="source" :disabled="disabledAll">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="名称">
                  <el-input v-model="name" :disabled="disabledAll"/>
                </el-form-item>
                <el-form-item label="说明">
                  <el-input v-model="instruction" :disabled="disabledAll"/>
                </el-form-item>
                <el-form-item label="值集层级">
                  <el-input v-model="zjcj" :disabled="disabledAll"/>
                </el-form-item>
                <el-form-item label="值集生成规则">
                  <el-input v-model="zjscgz" :disabled="disabledAll"/>
                </el-form-item>
          </el-form>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col :span="16"><p>属性设置</p></el-col>
            <el-col :span="8"><span>上移</span><span>下移</span><span>增加行</span><span>删除行</span></el-col>
          </el-row>
        </div>
        <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        height="53%"
        size="small"
        v-show="showTable">
        <el-table-column
          type="index"
          label="序号"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="name"
          label="属性名称"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="code"
          label="属性编码"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="type"
          label="属性类型"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="length"
          label="属性长度"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="display"
          label="录入时显示"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="required"
          label="是否必填"
          align='center'>
        </el-table-column>
      </el-table>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'fzhsxdy',
  data () {
    return {
      data1: [
        {
          id: 1,
          data: [
            {
              id: 1,
              label: '一级 1',
              children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                  id: 9,
                  label: '三级 1-1-1'
                }, {
                  id: 10,
                  label: '三级 1-1-2'
                }]
              }]
            }
          ]
        },
        {
          id: 2,
          data: [
            {
              id: 2,
              label: '一级 2',
              children: [{
                id: 5,
                label: '二级 2-1'
              }, {
                id: 6,
                label: '二级 2-2'
              }]
            }
          ]
        },
        {
          id: 1,
          data: [
            {
              id: 3,
              label: '一级 3',
              children: [{
                id: 7,
                label: '二级 3-1'
              }, {
                id: 8,
                label: '二级 3-2'
              }]
            }
          ]
        }
      ],
      options: [{
        value: '选项1',
        label: '选项1'
      }, {
        value: '选项2',
        label: '选项2'
      }, {
        value: '选项3',
        label: '选项3'
      }, {
        value: '选项4',
        label: '选项4'
      }, {
        value: '选项5',
        label: '选项5'
      }],
      tableData: [
        {
          name: '编码',
          code: 'code',
          type: '文本',
          length: '30',
          display: '显示',
          required: '是'
        },
        {
          name: '名称',
          code: 'name',
          type: '文本',
          length: '60',
          display: '显示',
          required: '是'
        },
        {
          name: '编码',
          code: 'code',
          type: '文本',
          length: '30',
          display: '显示',
          required: '是'
        },
        {
          name: '名称',
          code: 'name',
          type: '文本',
          length: '60',
          display: '显示',
          required: '是'
        },
        {
          name: '名称',
          code: 'name',
          type: '文本',
          length: '60',
          display: '显示',
          required: '是'
        },
        {
          name: '名称',
          code: 'name',
          type: '文本',
          length: '60',
          display: '显示',
          required: '是'
        }
      ],
      filterText: '',
      labelPosition: 'left',
      source: '',
      name: '',
      instruction: '',
      zjcj: '',
      zjscgz: '',
      showTable: false,
      disabledAll: false
    }
  },
  components: {
  },
  methods: {
    // 筛选功能
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 单击节点填充右边表单
    nodeClick (data, node, self) {
      //  TODO
      this.disabledAll = true
      this.source = '选项' + new Date().getSeconds()
      this.name = '测试名称' + new Date().getSeconds()
      this.instruction = '测试说明' + new Date().getSeconds()
      this.zjcj = '测试值级层集' + new Date().getSeconds()
      this.zjscgz = '测试xxxx' + new Date().getSeconds()
      this.showTable = true
    },
    addItem () {
      if (this.disabledAll) {
        return
      }
      this.disabledAll = false
      this.source = ''
      this.name = ''
      this.instruction = ''
      this.zjcj = ''
      this.zjscgz = ''
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree2.forEach(function (item, index) {
        item.filter(val)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->
<style scoped>
.el-col-8 {
  margin-top: 5px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.divborder {
  text-align: left;
  padding-left: 5px;
  border: 1px solid #4d9bac;
  height: 80vh;
}
.divborderleft {
  text-align: left;
  padding-left: 5px;
  border-top: 1px solid #4d9bac;
  border-right: 1px solid #4d9bac;
  border-bottom: 1px solid #4d9bac;
  height: 80vh;
}
ul {
  margin: 1%;
  padding: 1%;
}
ul li {
  margin: 1%;
  padding: 1%;
  list-style: none;
}
p {
  font-weight: bold;
  margin: 1%;
}
.el-form-item {
  margin-left: 20px;
  margin-bottom: 4px;
  width: 40%;
}
.el-form-item__label {
  width: 100px !important;
}
.el-input {
  width: 107%;
}
.el-col > span {
  margin-right: 10%;
  font-size: 13px;
}
.divborderleft > .el-button--text {
  padding: 0px;
}
.divborderleft i {
  margin-right: 0px !important;
}
.divborder > .el-button--text {
  padding: 0px;
}
.divborder i {
  margin-right: 0px !important;
}
</style>
