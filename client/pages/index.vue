<template>
  <div>
    <Header />
    <main>
      <SideNav />
      <Board />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
</style>
