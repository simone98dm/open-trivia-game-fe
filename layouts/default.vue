<template>
  <div
    class="flex flex-col h-screen justify-between bg-gray-50 dark:bg-gray-900"
  >
    <main class="container mx-auto"><slot /></main>
    <footer class="h-10 text-center text-gray-500 text-xs">
      <p>Made with ❤️ by <a href="https://simone98dm.dev">simone98dm</a></p>
    </footer>
  </div>
</template>
