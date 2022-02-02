<template>
  <div>
    <nav-bar />
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title mb-3">IoT Devices Management</h2>
          <p class="mb-3 card-text">Devices available in the system</p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">IP</th>
                  <th scope="col">Mask</th>
                  <th scope="col">Gateway</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="device in devices"
                  :key="device.id"
                  class="text-center"
                >
                  <td>{{ device.id }}</td>
                  <td>{{ device.name }}</td>
                  <td>{{ device.ip }}</td>
                  <td>{{ device.mask }}</td>
                  <td>{{ device.gateway }}</td>
                  <td>
                    <div class="btn-group" role="group" aria-label="">
                      <router-link :to="{name:'EditDevice', params:{id:device.id}}" class="btn btn-warning">Edit 📝
                      </router-link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deleteDevice(device.id)"
                      >
                        Delete 🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer text-end">
          <router-link to="/iot/devices/create" class="btn btn-success"
            >New device</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Devices",
  data() {
    return {
      devices: [],
    };
  },
  components: {
    NavBar,
    
  },
  created() {
    this.getDevices();
  },
  methods: {
    async getDevices() {
      await axios
        .get("https://dev-consume-api.herokuapp.com/api/devices/iot")
        .then((response) => {
          this.devices = response.data["Devices IoT"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteDevice(id) {
      await axios
        .delete(`https://dev-consume-api.herokuapp.com/api/device/iot/${id}`)
        .then(() => console.log("Success"))
        .catch((e) => console.log(e));
      this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
