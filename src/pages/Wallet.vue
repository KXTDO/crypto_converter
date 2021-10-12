<template>
  <div>
    <h2>Криптовалютный портфель</h2>
    <button
      type="button"
      class="floating-button"
      @click="$router.push({ name: 'home' })"
    >
      Вернуться
    </button>
    <div class="container-wallet">
      <div class="bag">
        <bag />
      </div>
    </div>
  </div>
</template>

<script>
import Bag from "../components/Bag.vue";
// import Pie from "../components/Pie.vue";
export default {
  components: { Bag },
  name: "Wallet",
};
</script>

<style scoped>
.bag {
  width: 70%;
}
.container-wallet {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
  display: flex;
  justify-content: center;
}
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
}
.floating-button {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: black;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.floating-button:hover {
  background: #2ee59d;
  box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
  color: white;
  transform: translateY(-2px);
}
</style>
