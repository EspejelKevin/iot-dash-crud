<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Update your IoT Device</h2>
        <p class="card-text">Make sure you fill in the fields correctly</p>
        <form v-on:submit.prevent="updateDevice">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Type the name of IoT device"
              v-model="device.name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">IP</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Type the IP adress of IoT device"
              v-model="device.ip"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mask</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Type the network mask correctly"
              v-model="device.mask"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Gateway</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="The gateway could be the IP of your home router"
              v-model="device.gateway"
            />
          </div>
          <div class="row">
            <div class="col">
                <button type="submit" class="btn btn-success">Update device</button>
            </div>
            <div class="col">
                <div class="text-end">
                    <router-link to="/iot/devices" class="btn btn-warning">Back to list</router-link>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue"

export default {
  name: "Edit Device",
  data() {
    return {
      device:{}
    };
  },
  components: {
    NavBar
  },
  created(){
    this.getDevice()
  },
  methods: {
    async getDevice() {
      await axios
        .get(`https://dev-consume-api.herokuapp.com/api/device/iot/${this.$route.params.id}`)
        .then((res) => {
          this.device = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateDevice(){
      await axios
        .put(`https://dev-consume-api.herokuapp.com/api/device/iot/${this.$route.params.id}`, this.device)
        .then(() => {
          this.$router.push("/iot/devices")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
</style>