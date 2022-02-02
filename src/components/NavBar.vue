<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container me-5 ms-5">
      <router-link class="navbar-brand" to="/">
          <img src="../../public/iot.png" alt="iot-brand" width="30" height="30">
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/iot/devices" class="nav-link">Devices</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/iot/devices/create" class="nav-link">New device</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>