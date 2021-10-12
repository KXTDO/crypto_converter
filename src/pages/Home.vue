<template>
  <div>
    <h2>Конвертер криптовалют</h2>
    <button
      type="button"
      class="floating-button"
      @click="$router.push({ name: 'wallet' })"
    >
      Кошелек
    </button>
    <div class="converter-container">
      <converter />
    </div>
  </div>
</template>

<script>
import Converter from "../components/Converter.vue";

export default {
  components: { Converter },
};
</script>

<style scoped>
.converter-container {
  margin-top: 100px;
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
