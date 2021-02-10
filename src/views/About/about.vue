<template>
  <div id="main">
    <headernav></headernav>
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