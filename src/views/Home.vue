<template>
  <div class="home">
    <div class="hero-section">
      <img src="/HeroSection/1.png" alt="Hero Image" class="hero-image">
      <div class="hero-overlay">
        <router-link to="/galeria" class="btn btn-primary btn-lg">
          Comenzar
        </router-link>
      </div>
    </div>

    <!-- Featured Content -->
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 class="card-img-top" alt="Mascota feliz">
            <div class="card-body">
              <h5 class="card-title">Cuidados Básicos</h5>
              <p class="card-text">Aprende los cuidados esenciales que tu mascota necesita para una vida saludable y feliz.</p>
              <div class="text-center mt-4">
                <router-link to="/cuidados" class="btn btn-primary">Ver más</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 class="card-img-top" alt="Tips Adiestramiento">
            <div class="card-body">
              <h5 class="card-title">Tips Adiestramiento</h5>
              <p class="card-text">Descubre cómo puedes enseñar acciones a tu perro y fortalecer tu vínculo con el.</p>
              <div class="text-center mt-4">
                <router-link to="/adiestramiento" class="btn btn-primary">Ver más</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <div class="container my-5">
      <h2 class="text-center mb-4">¿Por qué es importante la tenencia responsable?</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/vuhvw4VuHAQ" 
                    title="Tenencia Responsable" 
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="col">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/0zL-C6FiK4c" 
                    title="Cuidado de Mascotas" 
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="col">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/T-bEk29Qou8" 
                    title="Adiestramiento Básico" 
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="col">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/TEbsvTsYvEs" 
                    title="Comandos Esenciales" 
                    allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Valoración y Comentarios -->
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">¡Valora y recomienda Patitas Responsables!</h3>
              <!-- Valoración de estrellas -->
              <div class="d-flex justify-content-center mb-3">
                <span v-for="star in 5" :key="star" @click="setRating(star)" style="cursor:pointer; font-size:2rem; color:#ff69b4;">
                  <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'" />
                </span>
              </div>
              <p class="text-center mb-4">Tu valoración: <span class="fw-bold">{{ rating }} / 5</span></p>
              <!-- Comentarios -->
              <form @submit.prevent="addComment">
                <div class="mb-3">
                  <label for="comment" class="form-label">Deja tu comentario o recomendación:</label>
                  <textarea id="comment" v-model="newComment" class="form-control" rows="2" maxlength="200" placeholder="Escribe aquí..." required></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>
              <div v-if="comments.length" class="mt-4">
                <h5 class="mb-3">Comentarios recientes:</h5>
                <ul class="list-group">
                  <li v-for="(comment, idx) in comments" :key="idx" class="list-group-item">
                    <i class="bi bi-chat-left-quote text-primary me-2"></i>{{ comment }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      rating: 0,
      newComment: '',
      comments: []
    }
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.comments.unshift(this.newComment.trim());
        this.newComment = '';
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #fcf0f5;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

.hero-overlay {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.ratio {
  max-width: 800px;
  margin: 0 auto;
}

.btn-primary {
  background-color: #ff69b4;
  border-color: #ff69b4;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff1493;
  border-color: #ff1493;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
}

.btn-outline-primary {
  color: #FF69B4;
  border-color: #FF69B4;
  background-color: transparent;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: #FF69B4;
  border-color: #FF69B4;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
}

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 60vh;
    padding: 1.5rem;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.card-title {
  color: #ff69b4;
  font-weight: 600;
}
.bi-star,
.bi-star-fill {
  transition: color 0.2s;
}
.bi-star:hover,
.bi-star-fill:hover {
  color: #ff1493;
}
.list-group-item {
  border: none;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
}
@media (max-width: 768px) {
  .card-title {
    font-size: 1.3rem;
  }
}
</style> 