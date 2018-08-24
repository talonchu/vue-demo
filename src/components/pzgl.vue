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
      <router-link tag='a' :to="'/pzlr'" ><i class="el-icon-edit" style="margin-right: 15px">&nbsp;填制</i></router-link>
      <i class="el-icon-sort" style="margin-right: 15px">&nbsp;快速生成</i>
      <i class="el-icon-edit-outline" style="margin-right: 15px">&nbsp;机制凭证转入</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-circle-close-outline" style="margin-right: 15px">&nbsp;作废</i>
      <i class="el-icon-refresh" style="margin-right: 15px">&nbsp;撤销作废</i>
      <i class="el-icon-close" style="margin-right: 15px">&nbsp;删除</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-goods" style="margin-right: 15px">&nbsp;整理</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-printer" style="margin-right: 15px">&nbsp;打印</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-search" style="margin-right: 15px">&nbsp;常用查询</i>
      <i style="margin-right: 15px">|</i>
      <i class="el-icon-date" style="margin-right: 15px">&nbsp;设为常用模板</i>
    </el-container>
    <el-container style="margin-top: 20px">
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        v-loading="loading"
        element-loading-text="加载凭证列表"
        @row-dblclick='showDetail($event)'
        :empty-text="table_empty_text">
        <el-table-column
          :render-header="renderSelection">
          <template slot-scope="scope" v-if='scope.row.guid'>
            <i class="el-icon-zoom-in" @click="showDetail(scope.row)" style="cursor:pointer"></i>
            <el-checkbox v-model="$store.state.select"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          prop="guid"
          label="序号"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="no"
          label="凭证号"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="abstract"
          label="摘要"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="class"
          label="科目"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="jfje"
          label="借方金额"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="dfje"
          label="贷方金额"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="hslx"
          label="核算类型"
          align='center'>
        </el-table-column>
      </el-table>
    </el-container>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="page_size"
      layout="total, prev, pager, next, jumper"
      :total="total_items">
    </el-pagination>
    <el-dialog title="凭证详情" :visible.sync="showDialog" width="1000px">
      <el-table :data="detailData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="no" label="凭证号" width="20mn0"></el-table-column>
        <el-table-column property="status" label="状态"></el-table-column>
        <el-table-column property="type" label="类型"></el-table-column>
        <el-table-column property="abstract" label="摘要"></el-table-column>
        <el-table-column property="class" label="科目"></el-table-column>
        <el-table-column property="jfje" label="借方金额"></el-table-column>
        <el-table-column property="dfje" label="贷方金额"></el-table-column>
        <el-table-column property="hslx" label="核算类型"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pzcx',
  data () {
    return {
      tableData: [],
      showDialog: false,
      loading: false,
      detailData: [],
      table_empty_text: '暂无数据',
      page_size: 8,
      currentPage: 1,
      total_items: 0
    }
  },
  methods: {
    showDetail: function (row) {
      this.showDialog = !!row.abstract
      this.detailData = [row]
    },
    renderSelection (h, {column}) {
      return h('span', [
        h('el-checkbox',
          {
            on: {
              change: this.selectAll
            }
          })
      ])
    },
    selectAll: function () {
      this.$store.commit('selectAll')
    },
    handleCurrentChange (val) {
      this.obtainTableData(val, this.page_size)
    },
    obtainTableData (currentPage, pagesize) {
      var params = new URLSearchParams()
      params.append('currentPage', currentPage)
      params.append('pagesize', pagesize)
      var self = this
      self.loading = true
      axios.post('/api/ext/user/ssotoken', params, {timeout: 1000 * 15}).then(function (response) {
        self.tableData = response.data
        let size = response.data.length
        // 通过后台获取总数，这里测试
        self.total_items = 37
        //  如果数据不够撑满，添加空数据
        let fullSize = 0.6 * document.documentElement.clientHeight / 48
        if (size < fullSize) {
          for (let i = 0; i < fullSize - size; i++) {
            self.tableData.push({})
          }
          // self.tableData = self.tableData.concat((() => {
          //   let it = [{}, {}, {}]
          //   let items = []
          //   it.forEach(() => items.push({}))
          //   return items
          // })())
        }
        self.loading = false
      }).catch(error => {
        self.loading = false
        self.table_empty_text = '获取数据失败'
        if (error.toString().search('timeout') !== -1) {
          console.log('获取凭证列表超时')
        }
      })
    }
  },
  mounted: function () {
    // 页面渲染好后请求数据
    this.obtainTableData(this.currentPage, this.page_size)
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
<style>
.el-checkbox {
  margin-left: 40%
}
.el-table__row {
  height: 48px
}
</style>
