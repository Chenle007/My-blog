<template>
  <!-- 页脚组件  -->
  <div id="pageFooter">
    <p>Copyright © 2021 by Myopia cat . All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "pageFooter"
}
</script>

<style scoped>
#pageFooter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
  padding: 15px 0;
  background-color: #fff;
  border-top: 1px solid #e2e2e2;
  font-size: 12px;
  font-family: Helvetica,sans-serif;
  font-weight: 600;
  position: relative;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
#pageFooter p{
  max-width: 90%;
  text-align: center;
}
</style>