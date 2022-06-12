<template>
  <ag-grid-vue
    style="width: 100%; height: 100%"
    class="ag-theme-alpine"
    :columnDefs="fields"
    :rowData="rowData"
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
  },
  data() {
    return {
      rowData: [],
      gridApi: null,
      columnApi: null,
    };
  },
  beforeMount() {
    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ];
  },
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
        console.log("newval", val);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
