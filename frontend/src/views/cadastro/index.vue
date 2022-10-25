<!-- @format -->

<template>
  <div class="cadastro">
    <div >
		  <button @click="back">voltar</button>
		  <h1>Cadastrar</h1>
	  </div>
    <label for="modelo">modelo</label>
    <input type="text" name="modelo" v-model="carro.modelo" />

    <label for="modelo">marca</label>
    <input type="text" name="marca" v-model="carro.marca" />

    <label for="tipo">tipo</label>
    <select name="tipo" v-model="carro.tipo">
      <option>hatch</option>
      <option>sedan</option>
      <option>SUV</option>
    </select>

    <label for="situacao">situação</label>
    <select name="situacao" v-model="carro.situacao">
      <option>Disponível</option>
      <option>Indisponível</option>
    </select>

    <button @click="submit()">submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      carro: {
        modelo: '',
        marca: '',
        tipo: '', // hatch, sedan ou SUV
        situacao: '', // disponível ou indisponível
      },
    };
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/cadastro', this.carro).then((res) => {
        console.log(res)
        this.$router.push({ name: 'Listar' })
      })
    },
    back() {
      this.$router.push({ name: 'Listar' })
    }
  },
};
</script>

<style lang="scss">
.cadastro {
  display: flex;
  flex-direction: column;
}
</style>
