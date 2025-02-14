<template>
  <div class="skeleton">
    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-answer"></div>
      <div class="skeleton-answer"></div>
      <div class="skeleton-answer"></div>
      <div class="skeleton-answer"></div>
      <div class="skeleton-actions"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  width: 100%;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-content {
  flex-grow: 1;
  width: 100%;
}

.skeleton-title {
  height: 32px;
  background-color: #ccc;
  margin: auto;
  margin-bottom: 8px;
  width: 100%;
}

.skeleton-answer {
  height: 32px;
  background-color: #ccc;
  margin: auto;
  margin-bottom: 8px;
  width: 300px;
}

.skeleton-actions {
  height: 32px;
  background-color: #007bff;
  margin: auto;
  margin-bottom: 8px;
  width: 300px;
}

.skeleton-line:last-child {
  width: 80%;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
