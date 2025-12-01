<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Animated background -->
    <div
      class="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <!-- Animated orbs -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float"
        style="animation-delay: 4s"
      ></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 py-6 px-4">
      <div class="container mx-auto">
        <div
          class="glass rounded-2xl px-6 py-4 flex items-center justify-between"
        >
          <h1
            class="text-2xl md:text-3xl font-bold text-white flex items-center gap-2"
          >
            <span class="text-3xl">🧠</span>
            <span>Trivia Game</span>
          </h1>
          <div class="flex items-center gap-4">
            <!-- Could add theme toggle or settings here -->
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main
      class="flex-1 container mx-auto px-4 py-8 flex items-center justify-center"
    >
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 py-6 px-4">
      <div class="container mx-auto">
        <div class="glass rounded-2xl px-6 py-4 text-center">
          <p class="text-sm text-white/70">
            Made with <span class="text-red-400">❤️</span> by
            <a
              href="https://simone98dm.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-300 hover:text-blue-200 transition-colors font-medium hover:underline"
            >
              simone98dm
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
