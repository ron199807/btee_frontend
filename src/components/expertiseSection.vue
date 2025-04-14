<template>
  <section class="expertise" id="services">
    <div class="container">
      <div class="content-wrapper">
        <div class="section-label slide-in-up">— EXPERTISE</div>
        <h2 class="section-title slide-in-up" style="--delay: 0.1s">Any Type Of Query & Discussion.</h2>
        <p class="section-description slide-in-up" style="--delay: 0.2s">
          Results-driven Full-Stack Developer with 3+ years of experience building scalable web applications using Django and Vue.js. Specialized in REST API development (DRF), database optimization, and pixel-perfect UI implementation from Figma designs. Passionate about clean code and agile workflows. 
        </p>
        <!-- <a href="#contact" class="link-yellow slide-in-up" style="--delay: 0.3s">
          Ron's_Blog.com
          <arrow-right-icon class="icon" />
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
//import { ArrowRight as ArrowRightIcon } from 'lucide-vue-next';
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
.expertise {
  padding: var(--spacing-section) 0;
  background-color: var(--color-darker);
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-label {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.section-title {
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease var(--delay, 0s);
}

.section-description {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease var(--delay, 0s);
}

.link-yellow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--sumit-btn);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;
  border: 1px solid var(--sumit-btn);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease var(--delay, 0s);
}

.link-yellow:hover {
  background-color: var(--sumit-btn);
  color: var(--color-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(66, 185, 131, 0.2);
}

.link-yellow .icon {
  transition: transform 0.3s ease;
}

.link-yellow:hover .icon {
  transform: translateX(4px);
}

.slide-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

@media (max-width: 992px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .expertise {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-description {
    margin-bottom: 1.5rem;
  }
}
</style>