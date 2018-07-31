<template>
  <!-- <div>
    <el-select v-show="showSelection" v-model="abstract" @change="changeLabel()">
      <el-option
        v-for="item in abstracts"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <label v-show="showLabel" ref="selectedAbstract" @click="hideLabel()">请选择摘要</label>
  </div> -->
  <div>
    <el-popover placement="bottom" width="200" trigger="click" v-show="showSelection" @hide="hidePop()">
      <el-input placeholder="输入关键字进行搜索" v-model="filterText"></el-input>
      <el-tree :data="data" check-strictly show-checkbox @check ="changeLabel()" :filter-node-method="filterNode" ref="tree2"></el-tree>
      <el-button slot="reference">请选择摘要</el-button>
    </el-popover>
    <label v-show="showLabel" ref="selectedAbstract" @click="hideLabel()">请选择摘要</label>
  </div>
</template>

<script>
export default {
  name: 'pzlrAbstracts',
  data () {
    return {
      data: [{
        label: '测试1111',
        children: [{
          label: '测试222222',
          children: [{
            label: '测试33333'
          }]
        }]
      }, {
        label: '测试444',
        children: [{
          label: '测试55555',
          children: [{
            label: '测试66666'
          }]
        }, {
          label: '测试77777',
          children: [{
            label: '测试88888'
          }]
        }]
      }],
      abstracts: [{
        value: '摘要1',
        label: '摘要1111111'
      }, {
        value: '摘要2',
        label: '摘要2222222'
      }],
      abstract: '',
      showLabel: true,
      showSelection: false,
      filterText: ''
    }
  },
  methods: {
    changeLabel: function () {
      var checkedNodes = this.$refs.tree2.getCheckedNodes()
      var checkedNodesList = []
      checkedNodes.forEach(function (item, index) {
        checkedNodesList.push(item.label)
      })
      this.$refs.selectedAbstract.innerText = checkedNodesList.length > 0 ? checkedNodesList.toString() : '请选择摘要'
    },
    hideLabel: function () {
      this.showLabel = false
      this.showSelection = true
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    hidePop () {
      this.showLabel = true
      this.showSelection = false
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  }
}
</script>
