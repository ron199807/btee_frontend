<template>
  <section class="portfolio" id="works">
    <div class="container">
      <div class="section-label slide-in-up">— PORTFOLIO</div>
      <h2 class="section-title slide-in-up" style="--delay: 0.1s">All Creative Works, Selected projects.</h2>
      <p class="section-description slide-in-up" style="--delay: 0.2s">
        I'm a passionate web developer with more than 3+ years of experience in application development, interface design, and user experience.
      </p>

      <div class="portfolio-grid">
        <!-- First Portfolio Item -->
        <div class="portfolio-item featured slide-in-left" style="--delay: 0.3s">
          <div class="image-container">
            <img src="../assets/fitnes2.webp" alt="fitness image" class="portfolio-image" />
          </div>
          <div class="portfolio-content">
            <h3 class="portfolio-title">Fitness App</h3>
            <p class="portfolio-category">Created with React</p>
            <div class="link-container">
              <a href="https://nameless-trackingsystem.web.val.run" class="project-link">view</a>
              <arrow-right-icon class="icon" />
            </div>
          </div>
        </div>

        <!-- Second Portfolio Item -->
        <div class="portfolio-item slide-in-up" style="--delay: 0.4s">
          <div class="image-container">
            <img src="../assets/food.jpg" alt="food image" class="portfolio-image" />
          </div>
          <div class="portfolio-content">
            <h3 class="portfolio-title">Global Cuisines</h3>
            <p class="portfolio-category">Global cuisines</p>
            <div class="link-container">
              <a href="https://nameless-globalcuisinesite.web.val.run" class="project-link">view</a>
              <arrow-right-icon class="icon" />
            </div>
          </div>
        </div>

        <!-- Third Portfolio Item -->
        <div class="portfolio-item slide-in-up" style="--delay: 0.5s">
          <div class="image-container">
            <img src="../assets/clouds.jpg" alt="weather app image" class="portfolio-image" />
          </div>
          <div class="portfolio-content">
            <h3 class="portfolio-title">Simple Weather App</h3>
            <p class="portfolio-category">Product Developer</p>
            <div class="link-container">
              <a href="https://nameless-weatherapp.web.val.run" class="project-link">view</a>
              <arrow-right-icon class="icon" />
            </div>
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
    const elements = document.querySelectorAll('.slide-in-up, .slide-in-left');
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
  animateOnScroll();
});
</script>

<style scoped>
.portfolio {
  padding: var(--spacing-section) 0;
  background-color: var(--color-dark);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .portfolio-item.featured {
    grid-column: span 2;
  }
}

.portfolio-item {
  background-color: var(--color-darker);
  border-radius: 0.3rem;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
}

.image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.portfolio-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.portfolio-category {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.link-container {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--sumit-btn);
  border-radius: 0.3rem;
  width: fit-content;
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.05);
}

.portfolio-item:hover .link-container {
  background-color: var(--color-yellow-dark);
}

.project-link {
  color: var(--color-dark);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.link-container .icon {
  width: 1rem;
  height: 1rem;
  color: var(--color-dark);
  transition: transform 0.3s ease;
}

.portfolio-item:hover .link-container .icon {
  transform: translateX(4px);
}

/* Animation styles */
.slide-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease var(--delay, 0s);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease var(--delay, 0s);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-item.featured {
    grid-column: span 1;
  }
  .section-title {
    font-size: 1.8rem;
  }
}
</style>