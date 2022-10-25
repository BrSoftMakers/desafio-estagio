<!-- @format -->

<template>
  <div class="cadastro">
    <div>
		  <button @click="back">voltar</button>
		  <h1>Edição</h1>
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
  props: {
    item: {
      id: String,
      modelo: String,
      marca: String,
      tipo: String,
      situacao: String,
    }
  },
  mounted() {
    this.checkItem()
  },
  data() {
    return {
      id: '',
      carro: {
        modelo: '',
        marca: '',
        tipo: '', // hatch, sedan ou SUV
        situacao: '', // disponível ou indisponível
      },
    };
  },
  methods: {
    checkItem() {
      if(!!this.$route.params._id) return this.assembleItem();
      this.$router.push({ name: 'Listar' })
    },
    assembleItem(){
      this.id = this.$route.params._id
      this.carro.modelo = this.$route.params.modelo
      this.carro.marca = this.$route.params.marca
      this.carro.tipo = this.$route.params.tipo
      this.carro.situacao = this.$route.params.situacao
    },
    submit() {
      axios.post(`http://localhost:3000/carros/edit/${this.id}`, this.carro).then((res) => {
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
