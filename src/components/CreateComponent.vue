<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Criar Carro</h3>
      <form @submit.prevent="handleSubmitForm">

        <div class="form-group">
          <label>ID</label>
          <input
            type="text"
            class="form-control"
            v-model="car.id"
            required
          />
        </div>

        <div class="form-group">
          <label>Modelo</label>
          <input
            type="text"
            class="form-control"
            v-model="car.modelo"
            required
          />
        </div>

        <div class="form-group">
          <label>Marca</label>
          <input
            type="text"
            class="form-control"
            v-model="car.marca"
            required
          />
        </div>

        <div class="form-group">
          <template>
            <div>
              <br>
              <label>Tipo:</label>
              <select v-model="car.tipo">
                <optgroup label="Selecione uma opção">
                </optgroup>
                <option>hatch</option>
                <option>sedan</option>
                <option>SUV</option>
              </select>
            </div>
          </template>
          <br>
        </div>

        <div class="form-group">
          <template>
            <div>
              <br>
              <label>Situação:</label>
              <select v-model="car.situacao">
                <optgroup label="Selecione uma opção">
                </optgroup>
                <option>Disponível</option>
                <option>Indisponível</option>
              </select>
            </div>
          </template>
          <br>
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      car: {
        id: "",
        modelo: "",
        marca: "",
        tipo: "",
        situacao: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-car";

      axios
        .post(apiURL, this.car)
        .then(() => {
          this.$router.push("/");
          this.car = {
            id: "",
            modelo: "",
            marca: "",
            tipo: "",
            situacao: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>