import create from "./actions/create"
import edit from "./actions/edit"
import getAll from "./actions/getAll"
import remove from "./actions/remove"

const PetService = {
  getAll,
  create,
  edit,
  remove
}
export default PetService
