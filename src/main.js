import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

const app = createApp(App)

// scroll animation
app.directive('scroll-animation', {
    inserted(el, binding) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (binding.value === 'left') {
                        el.classList.add('slide-in-left');
                    } else if (binding.value === 'right') {
                        el.classList.add('slide-in-right');
                    }
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(el);
    }
});

app.mount('#app')