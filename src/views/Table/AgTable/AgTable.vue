<template>
  <div class="agTableOuter">
    <CommonTable />
  </div>
</template>
<style scoped>
.agTableOuter {
  height: calc(100vh - 53px - 16px - 64px - 24px - 28px);
}
</style>
<script>
import CommonTable from "@/components/CommonTable/CommonTable.vue";
export default {
  name: "AgTable",
  components: {
    CommonTable,
  },
};
</script>
