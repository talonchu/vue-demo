<template>
  <div id="app">
    <!--<router-view/>-->
    <el-header style="text-align: right; font-size: 20px">
      <span style="margin-right: 1000px">会计核算管理系统</span>
      <!--<el-dropdown><i class="el-icon-setting" style="margin-right: 15px"></i></el-dropdown>-->
      <!--<el-dropdown><i class="el-icon-circle-close-outline" style="margin-right: 15px"></i></el-dropdown>-->
      <el-dropdown>
        <i class="el-icon-question" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>注册</el-dropdown-item>
          <el-dropdown-item>操作手册</el-dropdown-item>
          <el-dropdown-item>关于</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container style="height: 100%;">
      <el-aside width="12%" style="background-color: rgb(238, 241, 246); height: 90vh">
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-goods"></i>期初处理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-edit"></i>凭证管理</template>
            <el-menu-item-group>
              <router-link :to="'/pzgl'"><el-menu-item index="3-1">凭证录入</el-menu-item></router-link>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-date"></i>月结管理</template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-tickets"></i>出纳管理</template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-time"></i>期末处理</template>
            <el-menu-item-group>
              <el-menu-item index="6-1">选项1</el-menu-item>
              <el-menu-item index="6-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-news"></i>报表账簿</template>
            <el-menu-item-group>
              <el-menu-item index="7-1">选项1</el-menu-item>
              <el-menu-item index="7-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-document"></i>以收定支</template>
            <el-menu-item-group>
              <el-menu-item index="8-1">选项1</el-menu-item>
              <el-menu-item index="8-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu {
  height: 100%;
}
</style>
