<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/monitos.png" alt="Patitas Responsables Logo" class="navbar-logo me-2">
          <span>Patitas Responsables</span>
        </router-link>
        <button 
          class="navbar-toggler" 
          type="button" 
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div 
          class="collapse navbar-collapse" 
          :class="{ 'show': isMenuOpen }"
          id="navbarNav"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="closeMenu">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cuidados" @click="closeMenu">Cuidados</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/adiestramiento" @click="closeMenu">Adiestramiento</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="footer-title">Patitas Responsables</h5>
            <p class="footer-text">Promoviendo la tenencia responsable de mascotas</p>
          </div>
          <div class="col-md-6 text-md-end">
            <h5 class="footer-title">Contacto</h5>
            <!-- Instagram icon -->
            <p class="button-instagram">
              <a href="https://www.instagram.com/pat.itasresponsables/" target="_blank">
                <i class="bi bi-instagram text-white hover-icon "></i>
              </a>
            </p>
            <p class="footer-text">Email: isi.millan@duocuc.cl</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFF0F5;
}

main {
  flex: 1;
}

.button-instagram {
  color: white !important;
  font-weight: 10;
  transition: all 0.3s ease;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.button-instagram:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white !important;
}
.custom-navbar {
  background-color: #FF69B4;
  box-shadow: 0 2px 4px rgba(255, 105, 180, 0.3);
}

.navbar-brand {
  color: white !important;
  font-weight: 600;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-logo {
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;
}

.navbar-brand:hover .navbar-logo {
  transform: scale(1.1);
}

.navbar-brand:hover {
  transform: none;
}

.navbar-brand span {
  font-size: 1.2rem;
}

.nav-link {
  color: white !important;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white !important;
}

footer {
  margin-top: auto;
  background-color: #FF69B4 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilos para las tarjetas */
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Estilos para los botones */
.btn-primary {
  background-color: #FF69B4;
  border-color: #FF69B4;
}

.btn-primary:hover {
  background-color: #FF1493;
  border-color: #FF1493;
}

/* Estilos para los acordeones */
.accordion-button:not(.collapsed) {
  background-color: #FF69B4;
  color: white;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(255, 105, 180, 0.125);
}

.footer {
  background-color: #FF69B4;
  color: white;
  box-shadow: 0 -2px 4px rgba(255, 105, 180, 0.3);
}

.footer-title {
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.footer-text {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}
</style> 