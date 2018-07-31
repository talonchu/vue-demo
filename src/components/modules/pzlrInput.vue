<template>
  <div>
    <el-input v-show="showInput" @blur="changeLabel()" v-model="amount"></el-input>
    <label v-show="showLabel" ref="amount" @click="hideLabel()">输入金额</label>
  </div>
</template>

<script>
export default {
  name: 'pzlrInput',
  data () {
    return {
      showInput: false,
      showLabel: true,
      amount: 0
    }
  },
  methods: {
    changeLabel: function () {
      this.$refs.amount.innerText = this.amount
      this.showLabel = true
      this.showInput = false
    },
    hideLabel: function () {
      this.showLabel = false
      this.showInput = true
    }
  }
}
</script>
