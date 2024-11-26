<template>
  <div class="intro">
    <div class="intro-container">
      <h1>We make</h1>
      <h1>stuff in</h1>
      <h1>our spare time</h1>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Gadugi Bold';
  src: url('@/assets/fonts/gadugib.ttf');
}

.intro {
  display: flex;
  width: 100%;
  height: 650px;
  background-image: url('@/assets/homeintro.png');
  box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
  background-position: center;
  background-size: cover;
}

.intro-container {
  line-height: 200%;
  margin: auto;
  width: fit-content;
  height: fit-content;
  display: block;
  margin: auto;
  font-family: 'Gadugi Bold';
  font-size: 35px;
  color: white;
}

@media (max-width: 768px) {
  .intro-container {
    width: 65%;
    font-size: 175%;
  }
}
</style>
