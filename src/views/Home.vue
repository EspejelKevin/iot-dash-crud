<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="card text-center">
      <div class="card-body">
        <h1 class="card-title">Iot Devices Dash</h1>
        <p class="card-text">
          Hi, my name is Kevin and this is my project &#128522;
        </p>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">About this project</h3>
                <p class="card-text">
                  Iot Devices Dash is a project that tries to simulate IoT
                  devices management. 💻
                </p>
                <p class="card-text">
                  The dash works like a CRUD, so the user can create, update,
                  delete an IoT device. In addition, the user will be able to
                  see a list of the devices available in that moment. ⚙️
                </p>
                <p>
                  <strong>I hope you enjoy it! ✨</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Technological stack</h3>
                <p class="card-text">
                  In this section, I am going to show you the Technological
                  stack that I used.
                </p>
                <ul class="card-text text-start">
                  <li>🐍Python with 🌶️Flask: create the API REST</li>
                  <li>🐘PostgreSQL: data persistance</li>
                  <li>🛠️Vue 3: build the user interface</li>
                </ul>
                <p>
                  <strong> The API REST was deployed on Heroku </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/iot/devices" class="btn btn-success mb-3">Let's started</router-link>
      </div>
      <div class="card-footer text-muted">Made by Kevin Espejel 2022</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
