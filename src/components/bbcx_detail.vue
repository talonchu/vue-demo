<template>
  <div>
    <el-container>
      <router-link tag='a' :to="'/bbcx'" ><i class="el-icon-back" style="margin-right: 15px">&nbsp;返回</i></router-link>
      <i class="el-icon-printer" style="margin-right: 15px">&nbsp;打印</i>
      <i class="el-icon-view" style="margin-right: 15px">&nbsp;预览</i>
      <i class="el-icon-setting" style="margin-right: 15px">&nbsp;打印设置</i>
      <i class="el-icon-search" style="margin-right: 15px">&nbsp;查找</i>
      <i class="el-icon-download" style="margin-right: 15px">&nbsp;导出</i>
      <i class="el-icon-more" style="margin-left: 650px">&nbsp;更多</i>
    </el-container>
    <h1 style="align:center">资产负债表{{currentItem}}</h1>
    <p align="right">会财政01表</p>
    <div>
      <div style="width:33%;float:left;text-align:left">编制单位：演示单位</div>
      <div style="width:33%;float:left">2019年1月</div>
      <div style="width:33%;float:left;text-align:right">单位：元</div>
    </div>
    <div>
      <el-table
      style="width: 100%"
      border
      :data="tableData"
      v-loading="loading"
      element-loading-text="加载凭证列表">
        <el-table-column
          label="资产"
          width="220"
          prop="zc"
          align="center"
          v-if="currentItem % 2 === 0 ? true : false">
        </el-table-column>
        <el-table-column
          label="期末余额"
          width="180"
          prop="qmye"
          align="center"
          v-if="currentItem % 2 === 0 ? true : false">
        </el-table-column>
        <el-table-column
          label="年初余额"
          width="180"
          prop="ncye"
          align="center"
          v-if="currentItem % 2 === 0 ? true : false">
        </el-table-column>
        <el-table-column
          label="负债和净资产"
          :width="currentItem % 2 === 0 ? '220' : '440'"
          prop="fzhjzc"
          align="center">
        </el-table-column>
        <el-table-column
          label="期末余额"
          :width="currentItem % 2 === 0 ? '180' : '360'"
          prop="qmye2"
          align="center">
        </el-table-column>
        <el-table-column
          label="年初余额"
          :width="currentItem % 2 === 0 ? '180' : '360'"
          prop="ncye2"
          align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bbcxdetail',
  data () {
    return {
      currentItem: this.$route.query.id,
      tableData: [
        {
          zc: '流动资产：',
          qmye: '',
          ncye: '',
          fzhjzc: '流动负债：',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '货币资金',
          qmye: '12312',
          ncye: '21121',
          fzhjzc: '短期借款',
          qmye2: '123',
          ncye2: '43556'
        },
        {
          zc: '短期投资',
          qmye: '12312',
          ncye: '5643',
          fzhjzc: '应交增值税',
          qmye2: '123',
          ncye2: '34234'
        },
        {
          zc: '财政应返还额度',
          qmye: '12453',
          ncye: '3454',
          fzhjzc: '其他应交税费',
          qmye2: '565',
          ncye2: '6779'
        },
        {
          zc: '应收票据',
          qmye: '123',
          ncye: '3545',
          fzhjzc: '应缴财政款',
          qmye2: '346543',
          ncye2: '231'
        },
        {
          zc: '应收账款净额',
          qmye: '12321',
          ncye: '5656',
          fzhjzc: '应付职工薪酬',
          qmye2: '4575',
          ncye2: '231'
        },
        {
          zc: '预付账款',
          qmye: '13',
          ncye: '54',
          fzhjzc: '应付票据',
          qmye2: '34213',
          ncye2: '13'
        },
        {
          zc: '应收股利',
          qmye: '233213',
          ncye: '324324',
          fzhjzc: '应付账款',
          qmye2: '321',
          ncye2: '123'
        },
        {
          zc: '应收利息',
          qmye: '12334',
          ncye: '3435',
          fzhjzc: '应付政府补贴款',
          qmye2: '13',
          ncye2: '2344'
        },
        {
          zc: '其他应收款净额',
          qmye: '879',
          ncye: '68',
          fzhjzc: '应付利息',
          qmye2: '6566',
          ncye2: '4564'
        },
        {
          zc: '存货',
          qmye: '345',
          ncye: '3738',
          fzhjzc: '预收账款',
          qmye2: '2343',
          ncye2: '37580'
        },
        {
          zc: '待摊费用',
          qmye: '123r',
          ncye: '765',
          fzhjzc: '其他应付款',
          qmye2: '6757',
          ncye2: '534'
        },
        {
          zc: '一年内到期的非流动资产',
          qmye: '35235',
          ncye: '323412',
          fzhjzc: '预提费用',
          qmye2: '2313',
          ncye2: '131'
        },
        {
          zc: '其他流动资产',
          qmye: '789',
          ncye: '77',
          fzhjzc: '一年内到期的非流动负债',
          qmye2: '7567',
          ncye2: '46456'
        },
        {
          zc: '流动资产合计',
          qmye: '5345',
          ncye: '35245',
          fzhjzc: '其他流动负债',
          qmye2: '1243',
          ncye2: '8678'
        },
        {
          zc: '非流动资产：',
          qmye: '',
          ncye: '',
          fzhjzc: '流动负债合计',
          qmye2: '635',
          ncye2: '345345'
        },
        {
          zc: '长期股权投资',
          qmye: '7567',
          ncye: '4564',
          fzhjzc: '非流动负债：',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '长期债权投资',
          qmye: '23123',
          ncye: '23213',
          fzhjzc: '长期借款',
          qmye2: '45435',
          ncye2: '34234'
        },
        {
          zc: '固定资产原值',
          qmye: '213123',
          ncye: '34324',
          fzhjzc: '长期应付款',
          qmye2: '123',
          ncye2: '3423'
        },
        {
          zc: '减：固定资产累计折旧',
          qmye: '3423',
          ncye: '123',
          fzhjzc: '预计负债',
          qmye2: '124',
          ncye2: '34234'
        },
        {
          zc: '固定资产净值',
          qmye: '567',
          ncye: '456',
          fzhjzc: '其他非流动负债',
          qmye2: '345',
          ncye2: '234'
        },
        {
          zc: '工程物资',
          qmye: '444',
          ncye: '123',
          fzhjzc: '非流动负债合计',
          qmye2: '454356',
          ncye2: '65756'
        },
        {
          zc: '在建工程',
          qmye: '234',
          ncye: '345',
          fzhjzc: '受托代理负债',
          qmye2: '34',
          ncye2: '657'
        },
        {
          zc: '无形资产原值',
          qmye: '32454',
          ncye: '3413',
          fzhjzc: '负债合计',
          qmye2: '789',
          ncye2: '5675'
        },
        {
          zc: '减：无形资产累计摊销',
          qmye: '456',
          ncye: '456',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '无形资产净值',
          qmye: '65546',
          ncye: '2342',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '研发支出',
          qmye: '2342',
          ncye: '23123',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '公共基础设施原值',
          qmye: '123',
          ncye: '324',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '减：公共稿基础设施累计折旧（摊销）',
          qmye: '131',
          ncye: '3432',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '公共基础设施净值',
          qmye: '1231',
          ncye: '76876',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '政府储备物资',
          qmye: '232',
          ncye: '78',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '文物文化资产',
          qmye: '56765',
          ncye: '345',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '保障性住房原值',
          qmye: '3547',
          ncye: '3242',
          fzhjzc: '',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '减：保障性住房累计折旧',
          qmye: '454312',
          ncye: '3123',
          fzhjzc: '净资产：',
          qmye2: '',
          ncye2: ''
        },
        {
          zc: '保障性住房净值',
          qmye: '123',
          ncye: '123',
          fzhjzc: '累计盈余',
          qmye2: '123',
          ncye2: '234'
        },
        {
          zc: '长期待摊费用',
          qmye: '123',
          ncye: '123',
          fzhjzc: '专用基金',
          qmye2: '234',
          ncye2: '23'
        },
        {
          zc: '待处理财产损益',
          qmye: '123',
          ncye: '3214234',
          fzhjzc: '权益法调整',
          qmye2: '123',
          ncye2: '1231'
        },
        {
          zc: '其他非流动资产',
          qmye: '435',
          ncye: '234',
          fzhjzc: '无偿调拨净值产*',
          qmye2: '67',
          ncye2: '456'
        },
        {
          zc: '非流动资产合计',
          qmye: '3453',
          ncye: '234',
          fzhjzc: '本期盈余*',
          qmye2: '65',
          ncye2: '232'
        },
        {
          zc: '受托代理资产',
          qmye: '1231',
          ncye: '1231',
          fzhjzc: '净资产合计',
          qmye2: '13',
          ncye2: '123'
        },
        {
          zc: '资产总计',
          qmye: '1231',
          ncye: '123',
          fzhjzc: '负债和净资产合计',
          qmye2: '123',
          ncye2: '123'
        }
      ]
    }
  },
  components: {
  },
  methods: {
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
