<template>
  <div class="cuidados">
    <div class="container">
      <h1 class="text-center mb-5">Cuidados Básicos para tu Mascota</h1>

      <!-- Alimentación -->
      <div class="row mb-5">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
               class="img-fluid rounded shadow" alt="Alimentación de mascotas">
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">
                <i class="bi bi-cup-hot me-2 text-primary"></i>
                Alimentación
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Proporciona una dieta balanceada y adecuada para la edad y tamaño de tu mascota
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Mantén agua fresca disponible en todo momento
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Establece horarios regulares para las comidas
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Evita dar comida humana que pueda ser dañina
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Ejercicio -->
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
               class="img-fluid rounded shadow" alt="Ejercicio con mascotas">
        </div>
        <div class="col-md-6 order-md-1">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">
                <i class="bi bi-activity me-2 text-primary"></i>
                Ejercicio
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Realiza paseos diarios con tu perro
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Proporciona juguetes y actividades para mantener a tu mascota activa
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Adapta el ejercicio según la edad y condición física
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Crea un espacio seguro para el juego
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Salud -->
      <div class="row mb-5">
        <div class="col-md-6">
          <img src="https://petindustry.co/wp-content/uploads/2021/11/La-medicina-veterinaria-clasificada-como-profesion-del-sector-salud2.jpeg" 
               class="img-fluid rounded shadow" alt="Cuidado veterinario">
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">
                <i class="bi bi-heart-pulse me-2 text-primary"></i>
                Salud
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Visitas regulares al veterinario
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Mantén al día las vacunas
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Control de parásitos internos y externos
                </li>
                <li class="list-group-item">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  Observa cambios en el comportamiento o apariencia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cuidados'
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

.text-primary {
  color: #FF69B4 !important;
}

.card-title {
  color: #333;
  font-weight: 600;
}

h1 {
  color: #333;
  font-weight: 700;
}

h2 {
  color: #444;
  font-weight: 600;
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