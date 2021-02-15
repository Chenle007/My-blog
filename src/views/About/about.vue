<template>
  <div id="main">
    <headernav></headernav>

    <!-- 关于我 页面 开发中   -->
    <p>test</p>
    <pageFooter></pageFooter>
  </div>
</template>

<script>

import headernav from "@/components/headernav";
import pageFooter from "@/components/pageFooter";
export default {
  name: "about",
  components:{
    headernav,
    pageFooter
  }
}
</script>

<style scoped>

</style>