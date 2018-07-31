<template>
  <div>
    <!-- <el-container v-show="showSelection">
      <el-cascader
        :options="kemuoptions"
        :show-all-levels="false"
        style="width: 30%"
        v-model="seletedKeMu"
        @change="kemuSelected">
      </el-cascader>
      <el-cascader
        v-show="kemutype === '1'"
        :options="kemuoptions2"
        :show-all-levels="false"
        style="width: 30%"
        v-model="seletedKeMu_2"
        @change="kemuSelected">
      </el-cascader>
      <el-cascader
        v-show="kemutype === '1'"
        :options="kemuoptions3"
        :show-all-levels="false"
        style="width: 30%"
        v-model="seletedKeMu_3"
        @change="kemuSelected">
      </el-cascader>
      <el-input v-show="kemutype === '2'" style="width: 30%" v-model="seletedKeMu_4" @change="kemuSelected"></el-input>
    </el-container>
    <el-container v-show="showLabel">
      <label ref="selectedClass_1" @click="hideLabel()" style="width: 30%">请选择摘要</label>
      <label v-show="kemutype === '1'" ref="selectedClass_2" @click="hideLabel()" style="width: 30%"></label>
      <label v-show="kemutype === '1'" ref="selectedClass_3" @click="hideLabel()" style="width: 30%"></label>
      <label v-show="kemutype === '2'" ref="selectedClass_4" @click="hideLabel()" style="width: 30%"></label>
    </el-container> -->
    <el-container v-show="showSelection">
      <el-popover placement="bottom" width="200" trigger="click" @hide="hidePop()">
        <el-input placeholder="输入关键字进行搜索" v-model="filterText"></el-input>
        <el-tree :data="kemuoptions" check-strictly accordion @node-click ="kemuSelected()" :filter-node-method="filterNode" ref="tree2"></el-tree>
        <el-button slot="reference">请选择摘要</el-button>
      </el-popover>
      <el-popover placement="top" width="200" trigger="click" @hide="hidePop()" v-show="kemutype === '1'">
        <el-input placeholder="输入关键字进行搜索" v-model="filterText3"></el-input>
        <el-tree :data="kemuoptions2" check-strictly accordion @node-click ="kemuSelected()" :filter-node-method="filterNode" ref="tree3"></el-tree>
        <el-button slot="reference">请选择摘要</el-button>
      </el-popover>
      <el-popover placement="top" width="200" trigger="click" @hide="hidePop()" v-show="kemutype === '1'">
        <el-input placeholder="输入关键字进行搜索" v-model="filterText4"></el-input>
        <el-tree :data="kemuoptions3" check-strictly accordion @node-click ="kemuSelected()" :filter-node-method="filterNode" ref="tree4"></el-tree>
        <el-button slot="reference">请选择摘要</el-button>
      </el-popover>
      <el-input v-show="kemutype === '2'" style="width: 30%" v-model="seletedKeMu_4" @change="kemuSelected"></el-input>
    </el-container>
    <el-container v-show="showLabel">
      <label ref="selectedClass_1" @click="hideLabel()" style="width: 30%">请选择摘要</label>
      <label v-show="kemutype === '1'" ref="selectedClass_2" @click="hideLabel()" style="width: 30%"></label>
      <label v-show="kemutype === '1'" ref="selectedClass_3" @click="hideLabel()" style="width: 30%"></label>
      <label v-show="kemutype === '2'" ref="selectedClass_4" @click="hideLabel()" style="width: 30%"></label>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'pzlrClasses',
  data () {
    return {
      kemuoptions: [{
        label: '全部',
        children: [{
          label: '资产类',
          children: [{
            label: '库存现金',
            isLeaf: true
          }, {
            label: '银行贷款',
            isLeaf: true
          }]
        }, {
          label: '负债类',
          children: [{
            label: '短期借款',
            isLeaf: true
          }, {
            label: '增值税',
            isLeaf: true
          }]
        }]
      }],
      kemuoptions2: [{
        label: '全部2',
        children: [{
          label: '资产类2',
          children: [{
            label: '库存现金2',
            isLeaf: true
          }, {
            label: '银行贷款2',
            isLeaf: true
          }]
        }, {
          label: '负债类2',
          children: [{
            label: '短期借款2',
            isLeaf: true
          }, {
            label: '增值税2',
            isLeaf: true
          }]
        }]
      }],
      kemuoptions3: [{
        label: '全部3',
        children: [{
          label: '资产类3',
          children: [{
            label: '库存现金3',
            isLeaf: true
          }, {
            label: '银行贷款3',
            isLeaf: true
          }]
        }, {
          label: '负债类3',
          children: [{
            label: '短期借款3',
            isLeaf: true
          }, {
            label: '增值税3',
            isLeaf: true
          }]
        }]
      }],
      seletedKeMu_4: '',
      kemutype: '',
      showSelection: false,
      showLabel: true,
      filterText: '',
      filterText3: '',
      filterText4: ''
    }
  },
  methods: {
    kemuSelected (value) {
      var currentNode1 = this.$refs.tree2.getCurrentNode()
      this.$refs.selectedClass_1.innerText = currentNode1 && currentNode1.isLeaf ? currentNode1.label : '请选择摘要'
      var currentNode2 = this.$refs.tree3.getCurrentNode()
      this.$refs.selectedClass_2.innerText = currentNode2 && currentNode2.isLeaf ? currentNode2.label : '请选择摘要'
      var currentNode3 = this.$refs.tree4.getCurrentNode()
      this.$refs.selectedClass_3.innerText = currentNode3 && currentNode3.isLeaf ? currentNode3.label : '请选择摘要'
      this.$refs.selectedClass_4.innerText = this.seletedKeMu_4 ? this.seletedKeMu_4 : '请输入摘要'
      if (currentNode1.label === '库存现金') {
        this.kemutype = '1'
      } else if (currentNode1.label === '银行贷款') {
        this.kemutype = '2'
      } else {
        this.kemutype = '3'
      }
      this.showSelection = false
      this.showLabel = true
    },
    hideLabel: function () {
      this.showLabel = false
      this.showSelection = true
    },
    hidePop () {
      this.showLabel = true
      this.showSelection = false
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    },
    filterText3 (val) {
      this.$refs.tree3.filter(val)
    },
    filterText4 (val) {
      this.$refs.tree4.filter(val)
    }
  }
}
</script>
