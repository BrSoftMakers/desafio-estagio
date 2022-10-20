<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Carros</h2>
    </template>

    <div class="flex items-center justify-center" style="background: #edf2f7">
      <div class="container">
        <div class="mb-2 mt-6 flex justify-between items-center block">
          <div class="px-0 my-3 rounded-xl flex flex-col">
            <div class="w-full">
              <Link
                :href="route('carros.create')"
                class="
                  focus:outline-none
                  text-white text-sm
                  py-2.5
                  px-5
                  border-b-4 border-gray-900
                  rounded-md
                  bg-gray-800
                  hover:bg-gray-500
                "
                >Novo</Link
              >

              <a
                type="button"
                class="
                  focus:outline-none
                  text-white text-sm
                  py-2.5
                  px-5
                  ml-2
                  border-b-4 border-green-600
                  rounded-md
                  bg-green-700
                  hover:bg-green-500
                "
                :href="route('carros.export', { term: this.term })"
                download="file.xlsx"
              >
                Exportar
              </a>
            </div>
          </div>

          <div class="w-full max-w-max mr-0">
            <label for="search" class="p-2 text-gray-700">Pesquisar</label>
            <input
              id="search"
              type="text"
              v-model="term"
              @keyup.enter="search"
              class="px-2 py-1 text-sm rounded border"
            />
          </div>
        </div>

        <table class="min-w-full border-collapse block md:table">
          <thead class="block md:table-header-group">
            <tr
              class="
                border border-indigo-500
                md:border-none
                block
                md:table-row
                absolute
                -top-full
                md:top-auto
                -left-full
                md:left-auto md:relative
              "
            >
              <!--<th
                class="
                  bg-indigo-500
                  p-2
                  text-white
                  font-bold
                  md:border md:border-indigo-500
                  text-left
                  block
                  md:table-cell
                "
              >
                Updated By
              </th>-->
              <th
                class="
                  bg-gray-800
                  p-2
                  text-white
                  font-bold
                  md:border md:border-gray-800
                  text-left
                  block
                  md:table-cell
                "
              >
                Id
              </th>
              <th
                class="
                  bg-gray-800
                  p-2
                  text-white
                  font-bold
                  md:border md:border-gray-800
                  text-left
                  block
                  md:table-cell
                "
              >
                Situacao
              </th>
              <!--<th
                class="
                  bg-indigo-500
                  p-2
                  text-white
                  font-bold
                  md:border md:border-indigo-500
                  text-left
                  block
                  md:table-cell
                "
              >
                Created By
              </th>-->
              <th
                class="
                  bg-gray-800
                  p-2
                  text-white
                  font-bold
                  md:border md:border-gray-800
                  text-left
                  block
                  md:table-cell
                "
              >
                Modelo
              </th>
              <th
                class="
                  bg-gray-800
                  p-2
                  text-white
                  font-bold
                  md:border md:border-gray-800
                  text-left
                  block
                  md:table-cell
                "
              >
                Marca
              </th>

              <th
                class="
                  bg-gray-800
                  p-2
                  text-white
                  font-bold
                  md:border md:border-gray-800
                  text-left
                  block
                  md:table-cell
                "
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            <tr
              v-for="carro in carros.data"
              :key="carro.id"
              class="
                bg-white
                border border-gray-200
                md:border-none
                block
                md:table-row
              "
            >
              <!--<td
                class="
                  p-2
                  md:border md:border-gray-500
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Updated By</span
                >{{ carro.updated_by }}
              </td>-->
              <td
                class="
                  p-2
                  md:border md:border-gray-200
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Id</span
                >{{ carro.id }}
              </td>
              <td
                class="
                  p-2
                  md:border md:border-gray-200
                  text-left
                  block
                  md:table-cell

                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Situacao</span
                >{{ carro.situacao }}
              </td>
              <!--<td
                class="
                  p-2
                  md:border md:border-gray-500
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Created By</span
                >{{ carro.created_by }}
              </td>-->
              <td
                class="
                  p-2
                  md:border md:border-gray-200
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Modelo</span
                >{{ carro.modelo }}
              </td>
              <td
                class="
                  p-2
                  md:border md:border-gray-200
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold">Marca</span
                >{{ carro.marca }}
              </td>

              <td
                class="
                  p-2
                  md:border md:border-gray-200
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Ações</span
                >
                <Link
                  class="
                    m-1
                    bg-gray-800
                    hover:bg-gray-900
                    text-white
                    font-bold
                    py-2
                    px-2
                    rounded
                  "
                  as="button"
                  type="button"
                  :href="route('carros.show', carro.id)"
                >
                  <span class="rounded-full text-white shadow-lg">
                      <img  src="/storage/img/view.png" width="24" height="24"/>
                  </span>
                </Link>
                <Link
                  class="
                    m-1
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    font-bold
                    py-2
                    px-2
                    rounded
                  "
                  as="button"
                  type="button"
                  :href="route('carros.edit', carro.id)"
                >
                  <span class="rounded-full text-white shadow-lg">
                      <img  src="/storage/img/lapis.png" width="24" height="24"/>
                  </span>
                </Link>

                <button
                  class="
                    m-1
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-2
                    px-2
                    rounded
                  "
                  tabindex="-1"
                  type="button"
                  @click="destroy(carro)"
                >
                  <span class="rounded-full text-white shadow-lg">
                      <img  src="/storage/img/lixeira.png" width="24" height="24"/>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination class="mt-6" :links="carros.links" />
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Pagination from "@/Shared/Pagination";

export default {
  props: {
    carros: Object,
  },
  data() {
    return {
      term: "",
    };
  },
  components: {
    AppLayout,
    Link,
    Pagination,
  },
  methods: {
    destroy(carro) {
      if (confirm("Você tem certeza que deseja excluir este registro?")) {
        this.$inertia.delete(this.route("carros.destroy", carro.id));
      }
    },
    search() {
      this.$inertia.replace(this.route("carros.index", { term: this.term }));
    },
  },
};
</script>

