<template>
  <div class="adiestramiento">
    <div class="container">
      <h1 class="text-center mb-5">Tips y Adiestramiento</h1>

      <!-- Introducción -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <p class="lead">
            Aprende técnicas efectivas y consejos prácticos para adiestrar a tu mascota y mejorar su comportamiento.
            El adiestramiento positivo fortalece el vínculo con tu mascota y crea una convivencia más armoniosa.
          </p>
        </div>
      </div>

      <!-- Tips Básicos -->
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">
                <i class="bi bi-lightbulb me-2 text-primary"></i>
                Tips Básicos de Adiestramiento
              </h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Mantén sesiones cortas (5-10 minutos) para mantener la atención
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Usa refuerzo positivo (premios, caricias, palabras amables)
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Entrena en un ambiente sin distracciones
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Ten paciencia y celebra los pequeños avances
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Utiliza siempre las mismas palabras para cada orden
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Observa el lenguaje corporal de tu mascota para entender su estado de ánimo
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="@/assets/chuli.png" class="img-fluid rounded shadow" alt="Adiestramiento de mascotas">
        </div>
      </div>

      <!-- Comandos Básicos -->
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">
                <i class="bi bi-list-check me-2 text-primary"></i>
                Comandos Básicos
              </h3>
              <div class="accordion" id="comandosAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button 
                      class="accordion-button" 
                      :class="{ 'collapsed': activeAccordion !== 'sit' }"
                      type="button" 
                      @click="toggleAccordion('sit')"
                    >
                      "Siéntate"
                    </button>
                  </h2>
                  <div 
                    id="sit" 
                    class="accordion-collapse collapse" 
                    :class="{ 'show': activeAccordion === 'sit' }"
                  >
                    <div class="accordion-body">
                      <p><i class="bi bi-1-circle me-2 text-primary"></i>Muestra un premio sobre la cabeza de tu mascota</p>
                      <p><i class="bi bi-2-circle me-2 text-primary"></i>Mueve el premio hacia atrás</p>
                      <p><i class="bi bi-3-circle me-2 text-primary"></i>Cuando se siente, di "siéntate" y dale el premio</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button 
                      class="accordion-button" 
                      :class="{ 'collapsed': activeAccordion !== 'stay' }"
                      type="button" 
                      @click="toggleAccordion('stay')"
                    >
                      "Quieto"
                    </button>
                  </h2>
                  <div 
                    id="stay" 
                    class="accordion-collapse collapse" 
                    :class="{ 'show': activeAccordion === 'stay' }"
                  >
                    <div class="accordion-body">
                      <p><i class="bi bi-1-circle me-2 text-primary"></i>Pide a tu mascota que se siente</p>
                      <p><i class="bi bi-2-circle me-2 text-primary"></i>Muestra la palma de tu mano y di "quieto"</p>
                      <p><i class="bi bi-3-circle me-2 text-primary"></i>Retrocede un paso y recompensa si se mantiene</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button 
                      class="accordion-button" 
                      :class="{ 'collapsed': activeAccordion !== 'come' }"
                      type="button" 
                      @click="toggleAccordion('come')"
                    >
                      "Ven"
                    </button>
                  </h2>
                  <div 
                    id="come" 
                    class="accordion-collapse collapse" 
                    :class="{ 'show': activeAccordion === 'come' }"
                  >
                    <div class="accordion-body">
                      <p><i class="bi bi-1-circle me-2 text-primary"></i>Comienza en un espacio cerrado</p>
                      <p><i class="bi bi-2-circle me-2 text-primary"></i>Di "ven" mientras muestras un premio</p>
                      <p><i class="bi bi-3-circle me-2 text-primary"></i>Recompensa cuando llegue a ti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 order-md-1">
          <img src="https://t2.ea.ltmcdn.com/es/posts/5/3/1/tecnicas_de_adiestramiento_canino_21135_orig.jpg" 
               class="img-fluid rounded shadow" alt="Comandos básicos">
        </div>
      </div>

      <!-- Video Tutorial -->
      <div class="my-5">
        <h2 class="text-center mb-4">Técnicas de Adiestramiento Positivo</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="video-container">
              <iframe src="https://youtube.com/embed/POgCPWoCrHM?si=97h67GbX_PTdqLPJ" 
                      title="Técnicas de adiestramiento" 
                      allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="video-container">
              <iframe src="https://www.youtube.com/embed/J5MgQd8Vqzc?si=rbz0vcASUlwiJva_" 
                      title="Comandos básicos" 
                      allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips Adicionales -->
      <div class="row mb-5">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                <i class="bi bi-clock me-2 text-primary"></i>
                Rutinas
              </h4>
              <p class="card-text">Establece horarios regulares para comidas, paseos y sesiones de entrenamiento.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                <i class="bi bi-emoji-smile me-2 text-primary"></i>
                Socialización
              </h4>
              <p class="card-text">Expón a tu mascota a diferentes personas, animales y entornos de manera gradual.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                <i class="bi bi-heart me-2 text-primary"></i>
                Ejercicio
              </h4>
              <p class="card-text">Mantén a tu mascota activa con juegos y ejercicio regular para un mejor comportamiento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adiestramiento',
  data() {
    return {
      activeAccordion: null
    }
  },
  methods: {
    toggleAccordion(id) {
      this.activeAccordion = this.activeAccordion === id ? null : id;
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  border-radius: 15px;
}

.card:hover {
  transform: translateY(-5px);
}

.list-group-item {
  border: none;
  padding: 1rem 0;
  background-color: transparent;
}

.img-fluid {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 15px;
}

.ratio {
  max-width: 800px;
  margin: 0 auto;
}

.accordion-button {
  border-radius: 8px !important;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.accordion-button::after {
  transition: transform 0.3s ease;
}

.accordion-button:not(.collapsed) {
  background-color: #FF69B4;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 105, 180, 0.2);
}

.accordion-button.collapsed {
  background-color: #f8f9fa;
  color: #333;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0,0,0,.125);
}

.accordion-item {
  border: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.accordion-collapse {
  transition: all 0.3s ease;
  max-height: 0;
  overflow: hidden;
}

.accordion-collapse.show {
  max-height: 500px; /* Ajusta este valor según el contenido máximo */
}

.accordion-body {
  background-color: #f8f9fa;
  border-radius: 0 0 8px 8px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);
}

.accordion-collapse.show .accordion-body {
  opacity: 1;
  transform: translateY(0);
}

/* Animación para los iconos de los pasos */
.accordion-body p {
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-10px);
}

.accordion-collapse.show .accordion-body p {
  opacity: 1;
  transform: translateX(0);
}

.accordion-collapse.show .accordion-body p:nth-child(1) {
  transition-delay: 0.1s;
}

.accordion-collapse.show .accordion-body p:nth-child(2) {
  transition-delay: 0.2s;
}

.accordion-collapse.show .accordion-body p:nth-child(3) {
  transition-delay: 0.3s;
}

/* Efecto hover en los botones del acordeón */
.accordion-button:hover {
  background-color: #ffb6c1;
  color: white;
}

.accordion-button.collapsed:hover {
  background-color: #f0f0f0;
  color: #333;
}

/* Animación del icono de flecha */
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FF69B4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transition: transform 0.3s ease;
}

.accordion-button:not(.collapsed)::after {
  transform: rotate(-180deg);
  filter: brightness(0) invert(1);
}

.text-primary {
  color: #FF69B4 !important;
}

.card-title {
  color: #333;
  font-weight: 600;
}

.lead {
  color: #666;
  font-size: 1.2rem;
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
</style> 