<template>
  <div id="games">
    <div class="games-header">Our projects currently available on S&box</div>
    <div class="games-wrapper">
      <div class="games-container">
        <a href="https://asset.party/softsplit/donut" class="games-coverart"></a>
        <a href="https://asset.party/softsplit/donut" class="games-title">S&box Donut</a>
        <p class="games-description">
          Immerse yourself in the tantalizing thrill of staring at a spinning ASCII torus, as you
          ponder life's deepest questions, such as 'Why is this so oddly satisfying?' and 'Can I
          make a career out of staring at virtual donuts?'
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#games {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-size: cover;
  background-position: right;
  /*background-image: url(@/assets/games.png);*/
  background: var(--color-background);
  box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset;
}

.games-header {
  font-weight: 800;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  color: white;
  font-size: 40px;
  font-family: 'Noto Sans', sans-serif;
}

.games-wrapper {
  display: flex;
  margin-bottom: 100px;
  margin-top: 100px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: fit-content;
}

.games-container {
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.games-coverart {
  height: 650px;
  background-image: url(@/assets/donut_coverart.png);
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  transition: 0.25s;
}

.games-title {
  width: fit-content;
  height: fit-content;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 800;
  color: white;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  transition: 0.25s;
}

.games-title:hover {
  color: orange;
}

.games-description {
  font-family: 'Noto Sans', sans-serif;
  line-height: 200%;
  width: fit-content;
  font-size: 17.5px;
  font-weight: 400;
  color: rgb(256, 256, 256, 0.8);
}

@media (max-width: 768px) {
  .games-header {
    text-align: center;
    width: 90%;
  }

  .games-container {
    width: 90%;
  }
}
</style>
