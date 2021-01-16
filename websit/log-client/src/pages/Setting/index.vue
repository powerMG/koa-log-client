<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template v-slot:label><i class="el-icon-coin"></i> 数据库设置</template>
      <div class="setting-doc">
        供用户初始化自己的数据库使用，每个新系统只支持初始化一次。
      </div>
      <comDBSetting />
    </el-tab-pane>
    <el-tab-pane>
      <template v-slot:label>
        <i class="el-icon-bank-card"></i>
        表结构设置
      </template>
      <div class="setting-doc">
        供用户初始化自己的表结构使用，每套新系统只支持初始话一次。
      </div>
      <comTableSetting />
    </el-tab-pane>
    <el-tab-pane>
      <template v-slot:label>
        <i class="el-icon-s-custom"></i>
        角色权限配置
      </template>
      <div class="setting-doc">角色权限配置</div>
    </el-tab-pane>
    <el-tab-pane>
      <template v-slot:label>
        <i class="el-icon-notebook-2"></i>
        账号设置
      </template>
      <div class="setting-doc">账号设置</div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineAsyncComponent, resolveComponent } from "vue";
export default {
  setup() {
    return {};
  },
  components: {
    comDBSetting: defineAsyncComponent(() =>
      import("./components/comDBSetting.vue")
    ),
    comTableSetting: defineAsyncComponent(() =>
      import("./components/comTableSetting.vue")
    ),
  },
};
</script>

<style lang="less" scoped>
.setting-doc {
  height: 30px;
  font-size: 12px;
  color: black;
  line-height: 30px;
  margin-bottom: 20px;
  background: #00a1ff33;
  border-radius: 3px;
}
</style>
