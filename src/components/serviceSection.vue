<template>
    <section class="services">
      <div class="container">
        <div class="services-grid">
          
          <div class="service-card yellow">
            <circle-icon class="service-icon" />
            <h3 class="service-title">Product Designer</h3>
            <p class="service-count">9Projects</p>
          </div>
          <div class="service-card">
            <tag-icon class="service-icon" />
            <h3 class="service-title">Branding Designer</h3>
            <p class="service-count">3 Projects</p>
          </div>
          <div class="service-card">
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
  </script>
  
  <style scoped>
  /* Add scoped styles for the services component */
  </style>