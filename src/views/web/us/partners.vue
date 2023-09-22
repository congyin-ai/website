<template>
    <div>
        <AwHeader class = "joinus_header" ref = "joinus_header"></AwHeader>
        <div style="height:100px"></div>
        <AwFooter style="margin-top:80vh;height:30vh"></AwFooter>
    </div>
</template>

<script>
import AwHeader from '@/components/web/public/Header'
import AwFooter from '../../../components/web/public/Footer'
export default {
    name: 'joinus',
    components: {
        AwFooter,
        AwHeader
        // CheckboxTransfer
  },
}
</script>

<style lang="less" scoped>
.joinus_header {
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}
</style>