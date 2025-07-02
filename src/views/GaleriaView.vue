<template>
  <div class="galeria">
    <div class="rotate-message" v-if="isMobile">
      <i class="fas fa-mobile-alt fa-rotate-90"></i>
      <p>Voltea tu celular para ver mejor</p>
    </div>
    <div v-for="(image, index) in images" :key="image" class="image-container">
      <img :src="`/HeroSection/${image}`" :alt="`Imagen ${index + 1}`" class="gallery-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaleriaView',
  data() {
    return {
      images: Array.from({ length: 25 }, (_, i) => `${i + 1}.png`),
      isMobile: window.innerWidth <= 768
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    }
  }
}
</script>

<style scoped>
.galeria {
  background-color: #fcf0f5;
  min-height: 100vh;
}

.rotate-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeOut 5s forwards;
}

.rotate-message i {
  font-size: 2rem;
  color: #ff69b4;
  margin-bottom: 0.5rem;
  animation: rotate 2s infinite;
}

.rotate-message p {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

.image-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf0f5;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 768px) {
  .image-container {
    height: 100vh;
  }
}

@media (max-width: 480px) {
  .image-container {
    height: 100vh;
  }
}
</style> 