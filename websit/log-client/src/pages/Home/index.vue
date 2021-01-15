<template>
  <div>首页{{ menuList }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
/* Import API File */
import { GetMenuList } from "../../apis/api_nav.js";
export default {
  setup() {
    const state = reactive({
      menuList: [],
    });
    GetMenuList()
      .then((res) => {
        state.menuList = res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
