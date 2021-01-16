<template>
  <div>首页</div>
</template>

<script>
import { reactive, toRefs } from "vue";
/* Import API File */
// import { GetMenuList } from "../../apis/api_nav.js";
export default {
  setup() {
    const state = reactive({
    });
    
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
