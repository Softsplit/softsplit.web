<template>
  <div class="teamlist">
    <div class="teamlist-wrapper">
      <div class="member-container">
        <img alt="Member picture" src="@/assets/asphaltian.jpg" class="member-img" />
        <div class="member-name">Asphaltian</div>
        <div class="member-title">Founder</div>
      </div>
      <div class="member-container">
        <img alt="Member picture" src="@/assets/badandbest.jpg" class="member-img" />
        <div class="member-name">badandbest</div>
        <div class="member-title">Programmer</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teamlist {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  text-align: center;
}

.teamlist-wrapper {
  display: flex;
  flex-direction: row;
  gap: 5vw;
  height: fit-content;
  margin: auto;
}

.member-img {
  width: 200px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.member-name {
  color: white;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  transition: 0.25s;
  width: fit-content;
}

.member-title {
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
}

.member-name:hover {
  color: orange;
}

.member-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  text-align: center;
  align-items: center;
}

@media (max-width: 768px) {
  .teamlist-wrapper {
    flex-direction: column;
  }

  .member-img {
    width: 80vw;
    border-radius: 65%;
    font-size: 175%;
  }

  .member-container:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
