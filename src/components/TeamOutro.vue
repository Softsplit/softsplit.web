<template>
  <div class="outro">
    <div class="outro-container">
      <h2>Interested in applying for a position?</h2>
    </div>
    <a href="https://forms.gle/abQZgnRJSKZbbTs19" class="button">Join here!</a>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Gadugi Bold';
  src: url('@/assets/fonts/gadugib.ttf');
}

.outro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-image: url('@/assets/teamoutro.png');
  background-position: bottom;
}

.outro-container {
  font-weight: 800;
  width: fit-content;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Gadugi Bold';
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
}

.button {
  background-color: transparent;
  width: 140px;
  font-weight: 600;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 24px;
  border: solid 2px;
  border-color: white;
  transition: 0.25s;
}

.button:hover {
  color: #181818;
  background-color: white;
}

@media (max-width: 768px) {
  .outro-container {
    height: 65%;
    width: 65%;
    font-size: 100%;
    margin-bottom: -15vw;
  }
}
</style>
