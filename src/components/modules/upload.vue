<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action=""
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
    :on-error="handleError">
    <el-button slot="trigger" size="small">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
  </el-upload>
</template>

<script>
export default {
  name: 'upload',
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
    },
    handleError (err, file, fileList) {
      console.log('附件上传失败' + fileList.length)
    }
  }
}
</script>
