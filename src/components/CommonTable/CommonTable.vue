<template>
  <ag-grid-vue
    style="width: 100%; height: 100%"
    class="ag-theme-alpine"
    :columnDefs="fields"
    :rowData="dataSource"
    @grid-ready="onGridReady"
  ></ag-grid-vue>
</template>

<script>
import { AgGridVue } from "@ag-grid-community/vue";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

export default {
  name: "CommonTable",
  components: {
    "ag-grid-vue": AgGridVue,
  },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      gridApi: null,
      columnApi: null,
    };
  },
  beforeMount() {},
  methods: {
    onGridReady(event) {
      console.log(event);
      this.gridApi = event.api;
      this.columnApi = event.columnApi;
      // 可以通过 gridApi 调用 ag-grid 的方法嘞
      // this.gridApi.sizeColumnsToFit();
    },
  },
  watch: {
    fields: {
      handler: function (val) {
        console.log("表头数据", val);
      },
      immediate: true,
    },
    dataSource: {
      handler: function (val) {
        console.log("表格数据", val);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
