"use server"

import fetchData from "@/utils/fetchData"

export default async function getAll() {
  try {
    const res = await fetchData("http://localhost:8000/api/v1/pets", {
      next: {
        tags: ["get-all-pets"]
      }
    })
    return await res.json()
  } catch (error) {
    return error
  }
}
