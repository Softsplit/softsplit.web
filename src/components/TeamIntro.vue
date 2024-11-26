<template>
  <div class="intro">
    <div class="intro-container">
      <h1>The Team™</h1>
      <h5>We hate our jobs</h5>
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
  align-items: center;
  text-align: center;
  width: 100%;
  height: 350px;
  background-image: url('@/assets/teamintro.png');
  box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset;
  background-position: center;
  background-size: cover;
}

.intro-container {
  font-size: 35px;
  line-height: 200%;
  font-weight: 800;
  margin-top: 100px;
  width: fit-content;
  height: fit-content;
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Gadugi Bold';
  color: white;
}

@media (max-width: 768px) {
  .intro-container {
    width: 65%;
    font-size: 175%;
  }
}
</style>
