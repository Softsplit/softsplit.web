<template>
  <div id="aboutus">
    <img alt="About us" src="@/assets/aboutus.png" class="aboutus-img" />
    <div class="aboutus-header">About Us</div>
    <p class="aboutus-description">
      We operate as an autonomous game development studio, presently developing for S&box.
    </p>
    <p class="aboutus-description">
      Our primary focus is on prioritizing the player's experience, drawing insights from their
      feedback. Steering clear of traditional management practices, we eschew unnecessary
      bureaucracy — decisions about a game's direction are collectively made by the team.
      Anticipating setbacks, we embrace failure as a means to learn and improve. Our commitment
      extends to crafting both our games and fostering enduring relationships within the community.
    </p>
  </div>
</template>

<style scoped>
#aboutus {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
}

.aboutus-img {
  margin-top: 100px;
  width: 300px;
  height: 300px;
}

.aboutus-header {
  font-weight: 800;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  color: white;
  font-size: 40px;
  font-family: 'Noto Sans', sans-serif;
}

.aboutus-description {
  font-family: 'Noto Sans', sans-serif;
  line-height: 200%;
  width: 600px;
  font-size: 17.5px;
  font-weight: 400;
  margin-bottom: 20px;
}

.aboutus-description:last-child {
  margin-bottom: 100px;
}

@media (max-width: 768px) {
  .aboutus-description {
    width: 75%;
  }
}
</style>
