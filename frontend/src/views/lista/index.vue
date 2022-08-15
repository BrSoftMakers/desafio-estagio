<!-- @format -->

<template>
  <div class="lista">
		<div class="header">
			<h1>Listar</h1>
			<button @click="handleCreate">Cadastrar</button>
		</div>

		<div class="item" v-for="item in itens" :key="item.id">
			<div class="wrapper">
				<div class="content">
					<div>Modelo: {{ item.modelo }}</div>
					<div>Marca: {{ item.marca }}</div>
					<div>Tipo: {{ item.tipo }}</div>
					<div>Situação: {{ item.situacao }}</div>
					<div>Data de Criação: {{ item.criadoEm }}</div>
				</div>
				<div class="buttons">
					<button @click="handleEdit(item)" class="edit">Edit</button>
					<button @click="handleDelete(item._id)" class="delete">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			itens: ''
		}
	},
  mounted() {
    this.callApi();
  },
  methods: {
    callApi() {
      axios.get('http://localhost:3000/').then((res) => {
        console.log(res.data);
        this.itens = res.data;
      });
    },
		handleEdit(item) {
			this.$router.push({ name: 'Editar', params: item  });
		},
		handleDelete(id) {
			console.log('delete', id)
			axios.get(`http://localhost:3000/carros/delete/${id}`).then((res) => {
				this.callApi()
			})
		},
		handleCreate(){
			this.$router.push({ name: 'Cadastrar' })
		}
  },
};
</script>

<style lang="scss">
.lista {
	display: flex;
	flex-direction: column;
	gap: 10px;

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;


		> h1 {

		}

		> button {
			border: 1px solid black;
			background-color: white;
			height: 40px;
			padding: 0 20px;
		}
	}
	.item {
		.wrapper {
				display: flex;
				flex-direction: row;
				box-shadow: 0 0 1px;
				justify-content: space-between;
			
			.content {
				display: flex;
				flex-direction: row;

				> div {
					border-right: 1px solid gray;
					padding: 20px;
				}
			}

			.buttons {
				margin: 0 50px;
				display: flex;
				align-items: center;

	>			.edit {
					background-color: white;
					color: blue;
					height: 40px;
					padding: 0 20px;
					margin-right: 20px;
					border: none;
				}
				.edit:hover {
					color: gray;
				}

				>.delete {
					border: none;
					color: red;
					background-color: white;
					height: 40px;
					padding: 0 20px;
				}

				.delete:hover {
					color: black
				}
			}
	}
		}
		.item:hover {
			box-shadow: 0 0 5px;
		}
}
</style>
