<template>
  <section class="testimonial slide-in-left">
    <div class="container">
        <div>
          <h4 class="section-label title">Testimonials</h4>
        </div>
        <div class="testimonial-content slide-in-right">
            <blockquote class="testimonial-text">
              <div class="testimonial-header">
                <img src="../assets/business_man.jpg" class="testimonial-image" alt="business man" />
                <div class="testimonial-author">
                  <h4>Jesse Mwaka</h4>
                  <p>Manager at Btee</p>
                </div>
              </div>
              <div class="testimonial-quote">
                "Ronald's dedication and expertise were invaluable to our project. His attention to detail and timely delivery exceeded expectations. Thank you, Ronald, for your outstanding contribution!"
              </div>
            </blockquote>
        </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-image {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--sumit-btn);
  box-shadow: 0 4px 10px rgba(66, 185, 131, 0.3);
  margin-right: 1.5rem;
  transition: transform 0.3s ease;
}

.testimonial-image:hover {
  transform: scale(1.05);
}

.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: var(--sumit-btn);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--sumit-btn), transparent);
}

.testimonial-text {
  position: relative;
  background: var(--color-dark);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--sumit-btn);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-text:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.testimonial-text::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 4rem;
  color: var(--sumit-btn);
  opacity: 0.1;
  font-family: serif;
  line-height: 1;
}

.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.testimonial-author h4 {
  color: var(--sumit-btn);
  margin-bottom: 0.25rem;
}

.testimonial-author p {
  font-style: italic;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.testimonial-quote {
  line-height: 1.6;
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid rgba(66, 185, 131, 0.3);
}

@media (max-width: 768px) {
  .testimonial-header {
      flex-direction: column;
      text-align: center;
  }
  
  .testimonial-image {
      margin-right: 0;
      margin-bottom: 1rem;
  }
  
  .testimonial-quote {
      padding-left: 0;
      border-left: none;
      padding-top: 1rem;
      border-top: 2px solid rgba(66, 185, 131, 0.3);
  }
}
</style>