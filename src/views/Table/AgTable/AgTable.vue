<template>
  <div class="agTableOuter">
    <!--    表格区域-->
    <div class="commonTableOuter">
      <CommonTable :fields="localFields" :dataSource="showData" />
    </div>
    <!--    工具箱-->
    <div class="toolBoxOuter">工具箱</div>
  </div>
</template>
<script>
import CommonTable from "@/components/CommonTable/CommonTable.vue";
import { transform2ColumnDefs } from "@/components/CommonTable/utils/index";
import { fields } from "./fakeData/index";
import request from "@/http";
export default {
  name: "AgTable",
  components: {
    CommonTable,
  },
  data() {
    return {
      fields: [],
      localFields: [],
      showData: [],
    };
  },
  mounted() {
    this.loadInitData();
  },
  methods: {
    async loadInitData() {
      const res = await request.get("/m1/1112665-0-default/tabledata");
      this.localFields = transform2ColumnDefs(fields);
      this.showData = res.data;
    },
  },
};
</script>
<style scoped>
.agTableOuter {
  width: 100%;
  display: flex;
  height: calc(100vh - 53px - 16px - 64px - 24px - 28px);
  display: flex;
}
.agTableOuter .commonTableOuter {
  flex: 1;
}
.agTableOuter .toolBoxOuter {
  width: 210px;
}
</style>
