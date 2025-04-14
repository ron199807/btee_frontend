<template>
  <section class="creative">
    <div class="container">
      <div class="content-wrapper">
        <div class="creative-content">
          <h2 class="creative-title slide-in-left">
            You can be creative, but more, you can have in your significant mind.
          </h2>
          <p class="creative-description slide-in-left" style="--delay: 0.1s">
            I'm a passionate Full-Stack developer with more than 3+ years of experience in application development, interface design, and user experience.
          </p>
        </div>
        <div class="stats">
          <div class="stat-item slide-in-up" style="--delay: 0.2s">
            <div class="stat-number">3+</div>
            <div class="stat-label">Years of Experience</div>
          </div>
          <div class="stat-item slide-in-up" style="--delay: 0.3s">
            <div class="stat-number">10+</div>
            <div class="stat-label">Completed Projects</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-up');
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        el.style.opacity = '1';
        if (el.classList.contains('slide-in-left')) {
          el.style.transform = 'translateX(0)';
        } else {
          el.style.transform = 'translateY(0)';
        }
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger once on load
});
</script>

<style scoped>
.creative {
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

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.creative-content {
  max-width: 90%;
}

.creative-title {
  font-size: 2.2rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.creative-description {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0;
  margin: auto;
  transform: translateX(-30px);
  transition: all 0.6s ease var(--delay, 0s);
}

.stats {
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
}

.stat-item {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--sumit-btn);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease var(--delay, 0s);
}

.slide-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

@media (max-width: 992px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .creative-content {
    max-width: 100%;
    text-align: center;
  }
  
  .creative-title {
    font-size: 2rem;
  }
  
  .stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .creative {
    padding: 3rem 0;
  }
  
  .creative-title {
    font-size: 1.8rem;
  }
  
  .creative-description {
    font-size: 1rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>