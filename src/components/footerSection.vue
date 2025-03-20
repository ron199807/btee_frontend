<template>
    <footer class="footer">
      <div class="container">
        <div class="logo">
          <img src="../assets/ron22.png" alt="Ronald Mweema" class="logo-placeholder" />
        </div>
        <p class="footer-text">Powered by Ronald Mweema</p>
        <div class="social-links">
          <a href="https://x.com/RMweema" class="social-link">
            <twitter-icon class="icon" />
          </a>
          <a href="https://web.facebook.com/ronald.mweema.3" class="social-link">
            <FacebookIcon class="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ronald-mweema-664276309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" class="social-link">
            <linkedin-icon class="icon" />
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Twitter as TwitterIcon, Linkedin as LinkedinIcon, FacebookIcon as FacebookIcon} from 'lucide-vue-next';
  </script>
  
  <style scoped>
  /* Add scoped styles for the footer component */
  </style>