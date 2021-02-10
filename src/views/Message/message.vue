<template>
  <div id="main">
    <headernav></headernav>
    <p>留言</p>
    <pageFooter></pageFooter>
  </div>
</template>

<script>

import headernav from "@/components/headernav";
import pageFooter from "@/components/pageFooter";
export default {
  name: "message",
  components:{
    headernav,
    pageFooter
  }
}
</script>

<style scoped>

</style>