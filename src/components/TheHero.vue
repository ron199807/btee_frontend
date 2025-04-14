<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="section-label slide-in-left">— INTRODUCTION</div>
          <h1 class="hero-title slide-in-left" style="--delay: 0.1s">
            Product Designer and Developer, based in Lusaka
          </h1>
          <p class="hero-description slide-in-left" style="--delay: 0.2s">
            I'm a passionate web developer with more than 3+ years of experience in application development, interface design, and user experience.
          </p>
          <a href="#contact" class="btn-primary slide-in-left" style="--delay: 0.3s">
            Get in touch
            <arrow-right-icon class="icon" />
          </a>
        </div>
        <div class="hero-image slide-in-right">
          <div class="image-wrapper">
            <img src="../assets/hero.jpg" alt="Ronald Mweema" class="image-placeholder" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight as ArrowRightIcon } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger once on load
});
</script>

<style scoped>
.hero {
  padding: 5rem 0;
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

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-text {
  max-width: 90%;
}

.section-label {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transition: all 0.6s ease;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0;
  transition: all 0.6s ease var(--delay, 0s);
}

.hero-description {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0;
  transition: all 0.6s ease var(--delay, 0s);
}

.btn-primary {
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
  transform: translateX(-20px);
  transition: all 0.6s ease var(--delay, 0s);
}

.btn-primary:hover {
  background-color: var(--sumit-btn);
  color: var(--color-dark);
  transform: translateY(-3px) translateX(0);
  box-shadow: 0 10px 20px rgba(66, 185, 131, 0.2);
}

.btn-primary .icon {
  transition: transform 0.3s ease;
}

.btn-primary:hover .icon {
  transform: translateX(4px);
}

.hero-image {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease 0.3s;
}

.image-wrapper {
  position: relative;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.image-placeholder {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover {
  transform: translateY(-5px);
}

.image-wrapper:hover .image-placeholder {
  transform: scale(1.03);
}

.slide-in-left {
  transform: translateX(-30px);
}

.slide-in-right {
  transform: translateX(30px);
}

.slide-in-left.active,
.slide-in-right.active {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-text {
    max-width: 100%;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-image {
    order: -1;
    max-width: 80%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
  margin-bottom: 1.5rem;
  }
  
  .btn-primary {
    padding: 0.6rem 1.2rem;
  }
}
</style>