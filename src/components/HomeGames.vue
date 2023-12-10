<template>
  <div id="games">
    <div class="games-header">Our projects currently available on S&box</div>
    <div class="games-wrapper">
      <div class="games-container">
        <a href="https://tspsource2.softsplit.org" class="games-coverart"></a>
        <a href="https://tspsource2.softsplit.org" class="games-title"
          >The Stanley Parable: Source 2</a
        >
        <p class="games-description">
          Embark on a surreal odyssey through a reenvisioned corporate realm, navigating perplexing
          decisions and delving into mind-twisting narratives, all propelled by the dynamic
          capabilities of the Source 2 engine.
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
  background-image: url(@/assets/games.png);
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
  background-image: url(@/assets/tspsource2_coverart.png);
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
    font-size: 220%;
  }

  .games-container {
    width: 80%;
  }
}
</style>
