<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="contact-title">Got a project? Let's talk.</h2>
          <p class="contact-description">
            I'm a passionate web developer with more than 3 years of experience in application development, interface design, and user experience.
          </p>
          <a href="mailto:ronaldmweema@gmail.com" class="link-yellow">
            Ron's_Blog.com
            <arrow-right-icon class="icon" />
          </a>
        </div>
        <div class="contact-form">
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
            <div class="form-group">
              <textarea id="testimonial" name="testimonial" v-model="formData.testimonial" maxlength="30" placeholder=" "></textarea>
              <label for="testimonial">Share a testimonial (optional) <span class="hint">Max 30 words</span></label>
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
import { ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon } from 'lucide-vue-next';
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
/* Your existing styles remain untouched */

/* Enhanced form styles */
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.form-group label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #6b7280;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left center;
  pointer-events: none;
  background-color: white;
  padding: 0 0.25rem;
  margin-left: -0.25rem;
}

.hint {
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: normal;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #eab308;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.1);
}

.form-group input:focus + label,
.form-group textarea:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:not(:placeholder-shown) + label {
  transform: translateY(-1.75rem) scale(0.85);
  color: #eab308;
  background-color: white;
}

/* Button styles */
.btn-submit {
  position: relative;
  padding: 0.75rem 2rem;
  background-color: #eab308;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-submit:hover:not(:disabled) {
  background-color: #ca8a04;
  transform: translateY(-1px);
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
  height: 100%;
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
  gap: 0.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-loader.active {
  opacity: 1;
}

.loader-dot {
  width: 6px;
  height: 6px;
  background-color: white;
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
    opacity: 0.5;
  }
  40% { 
    transform: scale(1);
    opacity: 1;
  }
}

/* Message styles */
.message {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
  animation: slideIn 0.3s ease-out forwards;
}

.success-message {
  background-color: rgba(74, 222, 128, 0.1);
  color: #16a34a;
  border-left: 3px solid #16a34a;
}

.error-message {
  background-color: rgba(248, 113, 113, 0.1);
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>