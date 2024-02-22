"use server"

import fetchData from "@/utils/fetchData"

export default async function remove(id: number) {
  try {
    const res = await fetchData(`${process.env.BASE_URL_API}/pets/${id}`, {
      method: "DELETE"
    })
    return await res.json()
  } catch (error) {
    return error
  }
}
