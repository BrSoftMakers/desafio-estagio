"use server"

import fetchData from "@/utils/fetchData"

export default async function remove(id: number) {
  try {
    const res = await fetchData("http://localhost:8000/api/v1/pets/" + id, {
      method: "DELETE"
    })
    return await res.json()
  } catch (error) {
    return error
  }
}
