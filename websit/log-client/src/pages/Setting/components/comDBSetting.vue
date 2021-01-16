<template>
  <el-form :model="dbInfo" inline class="setting-form">
    <el-form-item label="数据库名称">
      <el-input v-model="dbInfo.dbName" disabled></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetDbName">重置</el-button>
      <el-button type="primary" @click="initDbName">生成数据库</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "vue";
import { Message } from "element3";
import { GetDatabaseList } from "../../../apis/api_sys_setting";
export default {
  setup() {
    const state = reactive({
      dbInfo: { dbName: "" },
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
    GetDatabaseList({ dbName: "dblog" })
      .then((res) => {
        console.log(res);
        state.dbInfo = res;
      })
      .catch((err) => {
        console.log(err);
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

<style lang="less" scoped>
.setting-form {
  width: 500px;
  float: left;
  border: solid 1px #eee;
  padding: 20px;
  border-radius: 3px;
}
</style>
