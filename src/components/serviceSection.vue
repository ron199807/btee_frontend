<template>
  <section class="services">
    <div class="container">
      <div class="services-grid">
        <div class="service-card yellow slide-in-up" style="--delay: 0.1s">
          <circle-icon class="service-icon" />
          <h3 class="service-title">Product Designer</h3>
          <p class="service-count">9 Projects</p>
        </div>
        <div class="service-card slide-in-up" style="--delay: 0.2s">
          <tag-icon class="service-icon" />
          <h3 class="service-title">Branding Designer</h3>
          <p class="service-count">3 Projects</p>
        </div>
        <div class="service-card slide-in-up" style="--delay: 0.3s">
          <monitor-icon class="service-icon" />
          <h3 class="service-title">Full Stack Developer</h3>
          <p class="service-count">4 Projects</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Circle as CircleIcon, Tag as TagIcon, Monitor as MonitorIcon } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-in-up');
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger once on load
});
</script>

<style scoped>
.services {
  padding: var(--spacing-section) 0;
  background-color: var(--color-dark);
  position: relative;
  overflow: hidden;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background-color: var(--color-darker);
  padding: 2.5rem;
  border-radius: 0.3rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.service-card.yellow {
  background-color: var(--sumit-btn);
  color: var(--color-dark);
}

.service-card.yellow .service-icon {
  color: var(--color-dark);
}

.service-card.yellow .service-count {
  opacity: 0.8;
}

.service-icon {
  width: 2rem;
  height: 2rem;
  margin-bottom: 1.5rem;
  color: var(--sumit-btn);
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.service-card.yellow .service-title {
  color: var(--color-dark);
}

.service-count {
  font-size: 0.9rem;
  opacity: 0.7;
  color: var(--color-text-muted);
}

.service-card.yellow .service-count {
  color: var(--color-dark);
}

.slide-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 2rem;
  }
  
  .service-icon {
    width: 1.75rem;
    height: 1.75rem;
  }
}

@media (max-width: 480px) {
  .service-card {
    padding: 1.5rem;
  }
}
</style>