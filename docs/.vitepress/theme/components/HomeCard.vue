<template>
  <div class="home-card">
    <a :href="link" class="card-link">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <span class="card-arrow">→</span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.home-card {
  background: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.home-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-link {
  display: block;
  padding: 1.5rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.card-arrow {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.home-card:hover .card-arrow {
  transform: translateX(4px);
}
</style>