<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item>凭证管理</el-breadcrumb-item>
        <el-breadcrumb-item>凭证录入</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <el-container style="margin-top: 20px">
      <router-link tag='a' :to="'/pzgl'" ><i class="el-icon-back" style="margin-right: 15px">&nbsp;返回</i></router-link>
      <i class="el-icon-tickets" style="margin-right: 15px">&nbsp;保存</i>
      <i class="el-icon-document" style="margin-right: 15px">&nbsp;存草稿</i>
      <i class="el-icon-close" style="margin-right: 15px">&nbsp;取消</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-refresh" style="margin-right: 15px">&nbsp;撤销</i>
      <i class="el-icon-time" style="margin-right: 15px">&nbsp;还原</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-goods" style="margin-right: 15px">&nbsp;常用模板</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-picture" style="margin-right: 15px">&nbsp;场景</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-sort" style="margin-right: 15px">&nbsp;转换</i>
    </el-container>
    <h3>记账 凭证</h3>
    <div>
      <!-- <el-row :gutter="6">
        <el-col :span="2">单位：</el-col>
        <el-col :span="4">
          <el-select v-model="department">
            <el-option
              v-for="item in departments"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2">日期：</el-col>
        <el-col :span="4">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="2">附件：</el-col>
        <el-col :span="4">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="8">单位:</el-col>
            <el-col :span="12">
              <el-select v-model="department">
                <el-option
                  v-for="item in departments"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8">日期:</el-col>
            <el-col :span="12">
              <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-button type="text" @click="uploadDialogVisible = true">添加附件</el-button>
          <el-dialog
            title="附件"
            :visible.sync="uploadDialogVisible"
            width="30%">
            <template slot-scope="scope">
              <Upload :val="val"></Upload>
            </template>
            <span slot="footer" class="dialog-footer">
              <el-button @click="uploadDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="uploadDialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
    </div>
    <el-container style="margin-left: 95%">
      <i class="el-icon-circle-plus-outline" v-on:click="addElement">增加</i>
    </el-container>
    <el-container style="margin-top: 20px;">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%;"
        height="300px">
        <el-table-column
          type="index"
          label="序号"
          width="40%"
          align="center">
        </el-table-column>
        <el-table-column
          label="摘要"
          width="160%"
          align="center">
          <template slot-scope="scope">
            <!-- selectedAbstract事件捕获子组件(摘要选择组件)传来的选中值，$event：传回来的值，scope.$index：当前行数 -->
            <PzlrAbstracts v-on:selectedAbstract="selectedAbstract($event, scope.$index)"/>
          </template>
        </el-table-column>
        <el-table-column
          label="科目"
          width="550%"
          align="center">
          <template slot-scope="scope">
            <PzlrClasses/>
          </template>
        </el-table-column>
        <el-table-column
          label="借方金额"
          width="100%"
          align="center">
          <template slot-scope="scope">
            <PzlrInput></PzlrInput>
          </template>
        </el-table-column>
        <el-table-column
          label="贷方金额"
          width="100%"
          align="center">
          <template slot-scope="scope">
            <PzlrInput></PzlrInput>
          </template>
        </el-table-column>
        <el-table-column
          label="核算类型"
          width="105%"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          width="106%"
          align="center">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="removeElement(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>

<script>
import PzlrClasses from '@/components/modules/pzlrClasses'
import PzlrAbstracts from '@/components/modules/pzlrAbstracts'
import PzlrInput from '@/components/modules/pzlrInput'
import Upload from '@/components/modules/upload'
export default {
  name: 'pzlr',
  data () {
    return {
      val: '123456',
      tableData: [
        {}, {}, {}, {}
      ],
      departments: [
        {
          label: '单位111',
          value: '单位111'
        },
        {
          label: '单位222',
          value: '单位222'
        }
      ],
      department: '',
      date: '',
      uploadDialogVisible: false,
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  components: {
    PzlrClasses,
    PzlrAbstracts,
    PzlrInput,
    Upload
  },
  methods: {
    addElement: function () {
      this.tableData.push({})
    },
    removeElement: function (index, tableData) {
      if (tableData.length > 4) {
        console.log(tableData)
        tableData.splice(index, 1)
        console.log(tableData)
      }
    },
    // 接受子组件传过来的值
    selectedAbstract: function (event, index) {
      this.tableData[index].abstract = event
      console.log(this.tableData)
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
</style>
