<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0"
  />
  <div class="card mb-5 mb-xxl-8 pt-7">
    <div class="card-header d-flex align-items-center text-hover-primary">
      <h2 class="mt-5">Super User Details</h2>
      <div class="d-flex align-self-end flex-wrap">
        <form class="search-box mb-2">
          <button>
            <span class="material-symbols-outlined">search</span>
          </button>
          <input
            class=""
            type="search"
            name="focus"
            placeholder="Search for a Super user"
            id="search-input"
            value=""
          />
        </form>

        <div class="d-flex filter">
          <span class="p-2">Filter by:</span>
          <span class="mr-auto p-2">All Statuses</span>
          <div class="p-2">
            <button
              class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <i class="bi bi-chevron-down fs-3"></i>
            </button>
            <Dropdown1></Dropdown1>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body pb-0">
      <div class="menu-title">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Active</th>
              <th scope="col">Super User</th>
              <th scope="col">Organization</th>
              <th scope="col">email</th>
              <th scope="col">Contact</th>
              <th scope="col">More Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <!-- enabled button -->
                <div class="row mb-10">
                  <div class="col-lg-9 col-xl-4">
                    <span class="switch switch-icon">
                      <input type="hidden" />
                      <div
                        class="form-check form-check-custom form-check-solid form-switch mb-2"
                      >
                        <input class="form-check-input" type="checkbox" />
                      </div>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a class="fw-semobold fs-6">Max Smith</a>
              </td>
              <td>
                <a class="fw-semobold fs-6">Login PBX</a>
              </td>
              
              <td>
                <p>
                  <strong>logixpbx@managedlogix.com</strong>
                </p>
              </td>
              <td>
                <div>
                  <p>
                    Phone:
                    <strong> 888-777-9999 </strong>
                  </p>
                </div>
              </td>
              <td>
                <div class="d-flex filter">
                  <div class="p-2">
                    <button
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="top-end"
                    >
                      <i class="bi three-dots fs-3"></i>
                    </button>
                    <Dropdown3></Dropdown3>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <!-- enabled button -->
                <div class="row mb-10">
                  <div class="col-lg-9 col-xl-4">
                    <span class="switch switch-icon">
                      <input type="hidden" />
                      <div
                        class="form-check form-check-custom form-check-solid form-switch mb-2"
                      >
                        <input class="form-check-input" type="checkbox" />
                      </div>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a class="fw-semobold fs-6">Melody Macy</a>
              </td>
              <td>
                <a class="fw-semobold fs-6">Organization Two</a>
              </td>
              <td>
                <p>
                  <strong>melody@altbox.com</strong>
                </p>
              </td>
              <td>
                <div>
                  <p>
                    Phone:
                    <strong> 888-777-9999 </strong>
                  </p>
                </div>
              </td>
              <td>
                <div class="d-flex filter">
                  <div class="p-2">
                    <button
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="top-end"
                    >
                      <i class="bi three-dots fs-3"></i>
                    </button>
                    <Dropdown3></Dropdown3>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <!-- enabled button -->
                <div class="row mb-10">
                  <div class="col-lg-9 col-xl-4">
                    <span class="switch switch-icon">
                      <input type="hidden" />
                      <div
                        class="form-check form-check-custom form-check-solid form-switch mb-2"
                      >
                        <input class="form-check-input" type="checkbox" />
                      </div>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <a class="fw-semobold fs-6">Sean Bean</a>
              </td>
              <td>
                <a class="fw-semobold fs-6">Demo Organization</a>
              </td>
              <td>
                <p>
                  <strong>sean@dellito.com</strong>
                </p>
              </td>
              <td>
                <div>
                  <p>
                    Phone:
                    <strong> 888-777-9999 </strong>
                  </p>
                </div>
              </td>
              <td>
                <div class="d-flex filter">
                  <div class="p-2">
                    <button
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-flip="top-end"
                    >
                      <i class="bi three-dots fs-3"></i>
                    </button>
                    <Dropdown3></Dropdown3>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "profile-page-layout",
  components: {
    Dropdown1,
    Dropdown3,
  },
});
</script>
<style>
table {
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
}

th {
  font-weight: 600 !important;
  color: #a1a5b7 !important;
  font-size: 15px !important;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}
td a {
  cursor: pointer;
  text-decoration: dashed !important;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    content: attr(data-column);
    color: #000;
    font-weight: bold;
  }
}
.search-box {
  display: flex;
  align-content: center;
  align-items: center;
  border: 1px solid #f7f6f9;
  background-color: #f7f6f9;
  width: 28.8em;
  border-radius: 45px;
  transition: 0.2s;
}
.search-box button {
  background: none;
  border: none;
  padding: 0;
  padding: 3px;
  margin: 3px;
  border-radius: 50%;
  display: flex;
}
.search-box:hover {
  border-color: #aaa;
}

.search-box:focus-within {
  border-color: #009ef7;
  box-shadow: 0 0 0 5px rgba(0, 158, 247, 0.4);
}

input {
  letter-spacing: -0.2px;
  border: none;
  color: #323232;
  background-color: #f7f6f9;
}

::placeholder,
:-ms-input-placeholder,
::-ms-input-placeholder {
  font-weight: 800;
  color: red;
  opacity: 1;
}

button:hover {
  cursor: pointer;
}

input:focus {
  outline: none;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.clear:not(:valid) ~ .search-clear {
  display: none;
}
.filter {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-weight: 600;
}
.filter span:first-child {
  color: #9ea1a9;
}
.filter span {
  font-weight: 600;
}

.whitelabels button {
  width: 100%;
}
</style>
