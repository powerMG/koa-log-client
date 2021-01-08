<template>
  <div>
    <el-container>
      <el-header class="layout-header" height="50">
        <el-row>
          <el-col :span="4" class="layout-header-left">
            <div class="layout-header-left--nav" @click="showNav">
              <i class="el-icon-s-grid"></i>
            </div>
            <div class="layout-header-left--logo">logo</div>
          </el-col>
          <el-col :span="16">content</el-col>
          <el-col :span="4" class="layout-header-right">
            <el-popover
              class="layout-header-right--passport"
              placement="bottom"
              width="120"
              trigger="hover"
            >
              <ul class="layout-header-right--ul">
                <li class="layout-header-right--li">个人中心</li>
                <li class="layout-header-right--li">安全退出</li>
              </ul>
              <template #reference>
                <div>admin</div>
              </template>
            </el-popover>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="layout-centent">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-drawer
      v-model:visible="drawer"
      :modal="false"
      direction="ltr"
      :with-header="false"
      size="20%"
      class="layout-nav-data"
    >
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-openeds="defaultOpeneds"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <template v-slot:title>
            <span>数据总览</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-info"></i>
          <template v-slot:title>
            <span>日志信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-error"></i>
          <template v-slot:title>
            <span>错误信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-warning"></i>
          <template v-slot:title>
            <span>警告信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <template v-slot:title>
            <span>系统设置</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      drawer: false,
    });
    function showNav() {
      state.drawer = true;
    }
    return {
      ...toRefs(state),
      showNav,
    };
  },
};
</script>

<style lang="less" scoped>
.layout-header {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
  background-color: rgb(255, 255, 255);
  height: 50px;
  line-height: 50px;
  .layout-header-left {
    .layout-header-left--nav {
      font-size: 32px;
      float: left;
      cursor: pointer;
      color: #2484ff;
    }
    .layout-header-left--logo {
      float: left;
    }
  }
}
.layout-header-right--ul {
  list-style: none;
  .layout-header-right--li {
    height: 30px;
    line-height: 30px;
    border-bottom: solid 1px #e2e2e2;
    padding: 6px;
    text-align: center;
    &:hover {
      background: rgba(36, 132, 255, 0.65);
      color: rgb(255 255 255);
      cursor: pointer;
      margin: 0 -12px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
.layout-nav-data {
  margin-top: 50px;
}
.layout-centent {
  margin-top: 50px;
}
</style>
