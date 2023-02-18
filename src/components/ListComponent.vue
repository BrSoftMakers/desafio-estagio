<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Tipo</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in Cars" :key="car._id">
            <td>{{ car.id }}</td>
            <td>{{ car.modelo }}</td>
            <td>{{ car.marca }}</td>
            <td>{{ car.tipo}}</td>
            <td>{{ car.situacao}}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: car._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteCar(car._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Cars: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Cars = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteCar(id) {
      let apiURL = `http://localhost:4000/api/delete-car/${id}`;
      let indexOfArrayItem = this.Cars.findIndex((i) => i._id === id);

      if (window.confirm("Você realmente deseja excluir este carro?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Cars.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
