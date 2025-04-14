<template>
  <header class="header">
    <div class="container">
      <div class="logo" @click="animateLogo">
        <img src="../assets/ron22.png" alt="Logo" class="logo-placeholder" />
      </div>
      <nav class="navigation">
        <ul>
          <li 
            v-for="(item, index) in navItems" 
            :key="item.text"
            :class="{ active: activeItem === index }"
            @mouseenter="hoverNavItem(index)"
            @mouseleave="resetNavItem(index)"
          >
            <a :href="item.link">{{ item.text }}</a>
            <span class="underline" :class="{ active: activeItem === index }"></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref([
  { text: 'Services', link: '#services' },
  { text: 'Portfolio', link: '#works' }
]);

const activeItem = ref(0);

const hoverNavItem = (index) => {
  const items = document.querySelectorAll('.navigation li');
  items[index].classList.add('hover-effect');
};

const resetNavItem = (index) => {
  const items = document.querySelectorAll('.navigation li');
  items[index].classList.remove('hover-effect');
};

const animateLogo = () => {
  const logo = document.querySelector('.logo');
  logo.classList.add('logo-click');
  setTimeout(() => {
    logo.classList.remove('logo-click');
  }, 300);
};
</script>

<style scoped>
.header {
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-dark);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.logo {
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-click {
  animation: pulse 0.3s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.logo-placeholder {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  transition: transform 0.3s ease;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.navigation li {
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.navigation li.hover-effect {
  transform: translateY(-3px);
}

.navigation a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: color 0.3s;
  position: relative;
}

.navigation li.active a,
.navigation a:hover {
  color: var(--sumit-btn);
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--sumit-btn);
  transition: width 0.3s ease;
}

.navigation li:hover .underline,
.underline.active {
  width: 100%;
}

@media (max-width: 768px) {
  .navigation ul {
    gap: 1rem;
  }
  
  .logo-placeholder {
    width: 2rem;
    height: 2rem;
  }
}
</style>