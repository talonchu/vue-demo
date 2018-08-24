<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action=""
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" size="small">选取文件{{val}}</el-button>
    <el-button style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
  </el-upload>
</template>

<script>
export default {
  name: 'upload',
  props: ['val'],
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
