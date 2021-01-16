<template>
  <div class="setting-form-table--group">
    <!-- <el-form :model="dbInfo" inline class="setting-form">
      <el-form-item label="表名称">
        <el-input v-model="dbInfo.dbName" disabled></el-input>
      </el-form-item>
    </el-form> -->
    <el-button @click="resetDbName">重置</el-button>
    <el-button type="primary" @click="initDbName">生成表结构</el-button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Message } from "element3";
export default {
  setup() {
    const state = reactive({
      confAttributeType: [
        "bigint",
        "binary",
        "bit",
        "blob",
        "char",
        "date",
        "timestamp",
        "tinyblob",
        "tinyint",
        "tinytext",
        "varbinary",
        "varchar",
        "year",
      ],
    });
    /* 重置数据库名称 */
    const resetDbName = () => {
      Message("暂缓开通");
    };
    /* 初始话数据库 */
    const initDbName = () => {
      Message("暂缓开通");
    };
    return {
      ...toRefs(state),
      resetDbName,
      initDbName,
    };
  },
};
</script>

<style></style>
