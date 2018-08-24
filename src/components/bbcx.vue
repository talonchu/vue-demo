<template>
  <div>
    <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item>报表账簿</el-breadcrumb-item>
        <el-breadcrumb-item>报表查询</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <!-- <el-container style="margin-top: 20px">
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
    <h3>记账 凭证</h3> -->
    <div style="margin-top:20px">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="8">单位:</el-col>
            <el-col :span="12">
              <el-select v-model="defaultDep">
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
            <el-col :span="8">月份:</el-col>
            <el-col :span="12">
              <el-select v-model="defaultMonth">
                <el-option
                  v-for="item in months"
                  :value="item.value"
                  :key="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="4"><el-button type="text">查询</el-button></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-container style="margin-top: 20px;" v-loading="loading" element-loading-text="加载中">
      <el-tabs v-model="activeName" type="border-card" style="width:100%">
        <el-tab-pane label="全部" name="first">
          <el-row>
            <el-col :span="3" v-for="(o) in items" :key="o.index" :offset="1" style="margin-bottom:40px">
              <router-link :to="'/bbcxdetail?id=' + o">
                <el-card :body-style="{ padding: '0px', height: '100px'}" style="height: 160px;">
                  <img src="" class="image">
                  <div style="padding: 14px;">
                    <span>已生成</span>
                    <div class="bottom clearfix">
                      <span>内容</span>
                    </div>
                  </div>
                </el-card>
              </router-link>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="预算会计报表" name="second">
          <el-row>
            <el-col :span="3" v-for="(o) in 9" :key="o" :offset="1" style="margin-bottom:40px">
              <a href="">
                <el-card :body-style="{ padding: '0px', height: '100px'}" style="height: 160px;">
                  <img src="" class="image">
                  <div style="padding: 14px;">
                    <span>已生成</span>
                    <div class="bottom clearfix">
                      <span>内容</span>
                    </div>
                  </div>
                </el-card>
              </a>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="财务会计报表" name="third">
          <el-row>
            <el-col :span="3" v-for="(o) in 7" :key="o" :offset="1" style="margin-bottom:40px">
              <a href="">
                <el-card :body-style="{ padding: '0px', height: '100px'}" style="height: 160px;">
                  <img src="" class="image">
                  <div style="padding: 14px;">
                    <span>已生成</span>
                    <div class="bottom clearfix">
                      <span>内容</span>
                    </div>
                  </div>
                </el-card>
              </a>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pzlr',
  data () {
    return {
      months: [
        {
          value: '1月'
        },
        {
          value: '2月'
        },
        {
          value: '3月'
        },
        {
          value: '4月'
        },
        {
          value: '5月'
        },
        {
          value: '6月'
        },
        {
          value: '7月'
        },
        {
          value: '8月'
        },
        {
          value: '9月'
        },
        {
          value: '10月'
        },
        {
          value: '11月'
        },
        {
          value: '12月'
        },
        {
          value: '年末'
        }
      ],
      departments: [
        {
          label: '测试单位1',
          value: '测试单位1'
        }, {
          label: '测试单位2',
          value: '测试单位2'
        }
      ],
      items: [],
      activeName: 'first',
      defaultDep: '测试单位1',
      defaultMonth: '1月',
      loading: false
    }
  },
  components: {
  },
  methods: {
    scroll () {
      window.onscroll = () => {
        // 判断页面是否拉到底部
        let scrollTop = document.documentElement.scrollHeight
        let scrollHeight = document.documentElement.scrollTop
        let windowHeight = document.documentElement.clientHeight
        if (scrollTop - scrollHeight === windowHeight) {
          this.obtainTableData(0, 0)
        }
      }
    },
    obtainTableData (currentPage, pagesize) {
      var params = new URLSearchParams()
      params.append('currentPage', currentPage)
      params.append('pagesize', pagesize)
      var self = this
      self.loading = true
      axios.post('/api/ext/user/ssotoken', params, {timeout: 1000 * 15}).then(response => {
        if (response.data) {
          response.data.forEach(item => {
            self.items.push(item)
          })
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
  created: function () {
    // 首次加载数据
    this.obtainTableData(0, 0)
    // 滚动加载数据
    this.scroll()
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
a {
  text-decoration: none
}
</style>
