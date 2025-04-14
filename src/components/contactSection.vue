<template>
  <section class="contact slide-in-left" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info slide-in-right">
          <h2 class="contact-title">Got a project? Let's talk.</h2>
          <p class="contact-description">
            I'm a passionate web developer with more than 3+ years of experience in application development, interface design, and user experience.
          </p>
        </div>
        <div class="contact-form slide-in-left">
          <h2 class="contact-title">Estimate your project? Let me know here.</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" id="name" name="name" v-model="formData.name" required placeholder=" " />
              <label for="name">What's your name?</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" v-model="formData.email" required placeholder=" " />
              <label for="email">Your fancy email</label>
            </div>
            <div class="form-group">
              <textarea id="message" name="message" v-model="formData.message" required placeholder=" "></textarea>
              <label for="message">Tell me about your project</label>
            </div>
            <button type="submit" class="btn-submit" :disabled="isLoading" :class="{ loading: isLoading }">
              <span class="btn-content">
                <span class="btn-text" :class="{ hidden: isLoading }">Submit</span>
                <span class="btn-loader" :class="{ active: isLoading }">
                  <span class="loader-dot"></span>
                  <span class="loader-dot"></span>
                  <span class="loader-dot"></span>
                </span>
              </span>
            </button>
            
            <transition name="message-fade">
              <div v-if="isSuccess" class="message success-message">
                <check-circle-icon class="icon" size="20" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            </transition>
            
            <transition name="message-fade">
              <div v-if="error" class="message error-message">
                <alert-circle-icon class="icon" size="20" />
                <span>{{ error }}</span>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
  testimonial: ''
});

const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref(null);

const submitForm = async () => {
  isLoading.value = true;
  isSuccess.value = false;
  error.value = null;
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/ronaldmweema@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
        testimonial: formData.value.testimonial,
        _subject: `New project inquiry from ${formData.value.name}`
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      isSuccess.value = true;
      formData.value = {
        name: '',
        email: '',
        message: '',
        testimonial: ''
      };
      setTimeout(() => isSuccess.value = false, 5000);
    } else {
      throw new Error(data.message || 'Failed to send message');
    }
  } catch (err) {
    error.value = err.message;
    setTimeout(() => error.value = null, 5000);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.contact {
  background-color: var(--color-darker);
  padding: var(--spacing-section) 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: flex-start;
}

.contact-title {
  font-size: 1.8rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  position: relative;
  padding-bottom: 0.5rem;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3rem;
  height: 3px;
  background: var(--sumit-btn);
}

.contact-description {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.form-group {
  position: relative;
  margin-bottom: 2rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-text);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group textarea {
  min-height: 120px;
  resize: none;
}

.form-group label {
  position: absolute;
  top: 1rem;
  left: 0;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
  pointer-events: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--sumit-btn);
}

.form-group input:focus + label,
.form-group textarea:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:not(:placeholder-shown) + label {
  transform: translateY(-1.5rem) scale(0.85);
  color: var(--sumit-btn);
}

.btn-submit {
  background: var(--sumit-btn);
  color: var(--color-text);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 1rem;
}

.btn-submit:hover:not(:disabled) {
  background-color: #369f6e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.btn-text {
  transition: opacity 0.3s ease;
}

.btn-text.hidden {
  opacity: 0;
}

.btn-loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-loader.active {
  opacity: 1;
}

.loader-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-text);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loader-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loader-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1);
  }
}

.message {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
}

.success-message {
  background-color: rgba(66, 185, 131, 0.1);
  color: var(--sumit-btn);
  border-left: 3px solid var(--sumit-btn);
}

.error-message {
  background-color: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  border-left: 3px solid #dc2626;
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 1.3rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
}
</style>