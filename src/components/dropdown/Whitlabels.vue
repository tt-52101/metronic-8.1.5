<template>
  <!--begin::Menu 1-->
  <div
    class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
    data-kt-menu="true"
  >
    <!--begin::Header-->
    <div class="px-7 py-5">
      <div class="fs-5 text-dark fw-bold">Whitelabels Available</div>
    </div>
    <!--end::Header-->
    <!--begin::Menu separator-->
    <div class="separator border-gray-200"></div>
    <!--end::Menu separator-->
    <!--begin::Form-->
    <div class="px-7 py-5">
      <!--begin::Input group-->
      <div class="mb-10">
        <div>
          <select
            class="form-select form-select-solid select2-hidden-accessible"
            v-model="data.status"
          >
            <option label="White Label Uno" value="1">Whitlabel 1</option>
            <option label="White Label Dos" value="2">Whitlabel 2</option>
            <option label="White Label Tres" value="3">Whitlabel 3</option>
            <option label="White Label Cuatro" value="4">Whitlabel 4</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          type="reset"
          class="btn btn-sm btn-light btn-active-light-primary me-2"
          data-kt-menu-dismiss="true"
        >
          Reset
        </button>
        <button
          type="submit"
          class="btn btn-sm btn-primary"
          data-kt-menu-dismiss="true"
        >
          Apply
        </button>
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Form-->
  </div>
  <!--end::Menu 1-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Filter {
  status: string;
  author: boolean;
  customer: boolean;
  notifications: boolean;
}

export default defineComponent({
  name: "white-labels",
  components: {},
  setup() {
    const data = ref<Filter>({
      status: "1",
      author: true,
      customer: true,
      notifications: true,
    });

    return {
      data,
    };
  },
});
</script>
