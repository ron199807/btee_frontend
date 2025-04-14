<template>
  <footer class="footer slide-in-up">
    <div class="container">
      <div class="footer-content">
        <div class="logo">
          <img src="../assets/ron22.png" alt="Ronald Mweema" class="logo-img" />
        </div>
        <p class="footer-text">Powered by Ronald Mweema</p>
        <div class="social-links">
          <a href="https://x.com/RMweema" class="social-link" target="_blank" rel="noopener noreferrer">
            <twitter-icon class="icon" size="20" />
          </a>
          <a href="https://web.facebook.com/ronald.mweema.3" class="social-link" target="_blank" rel="noopener noreferrer">
            <facebook-icon class="icon" size="20" />
          </a>
          <a href="https://www.linkedin.com/in/ronald-mweema-664276309" class="social-link" target="_blank" rel="noopener noreferrer">
            <linkedin-icon class="icon" size="20" />
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">&copy; 2025 Ronald Mweema. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter as TwitterIcon, Linkedin as LinkedinIcon, Facebook as FacebookIcon } from 'lucide-vue-next';
</script>

<style scoped>
.footer {
background-color: var(--color-darker);
padding: 3rem 0 1.5rem;
position: relative;
overflow: hidden;
}

.footer::before {
content: '';
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 90%;
height: 1px;
background: linear-gradient(90deg, transparent, rgba(66, 185, 131, 0.5), transparent);
}

.footer-content {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
}

.logo-img {
width: 4rem;
height: 4rem;
border-radius: 50%;
object-fit: cover;
border: 2px solid var(--sumit-btn);
margin-bottom: 1.5rem;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-img:hover {
transform: scale(1.05);
box-shadow: 0 0 15px rgba(66, 185, 131, 0.3);
}

.footer-text {
color: var(--color-text-muted);
font-size: 0.9rem;
margin-bottom: 1.5rem;
text-align: center;
max-width: 600px;
}

.social-links {
display: flex;
gap: 1.5rem;
margin-bottom: 2rem;
}

.social-link {
display: flex;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.05);
color: var(--color-text-muted);
transition: all 0.3s ease;
}

.social-link:hover {
background-color: var(--sumit-btn);
color: var(--color-dark);
transform: translateY(-3px);
box-shadow: 0 4px 8px rgba(66, 185, 131, 0.3);
}

.footer-bottom {
text-align: center;
padding-top: 1.5rem;
border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
color: var(--color-text-muted);
font-size: 0.8rem;
opacity: 0.7;
}

/* Animation */
@keyframes slideInFromBottom {
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
}

.slide-in-up {
animation: slideInFromBottom 0.8s ease-out forwards;
}

@media (max-width: 768px) {
.footer {
  padding: 2rem 0 1rem;
}

.social-links {
  gap: 1rem;
}

.social-link {
  width: 2.2rem;
  height: 2.2rem;
}
}
</style>