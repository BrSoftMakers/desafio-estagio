"use server"

import fetchData from "@/utils/fetchData"

export default async function getAll() {
  try {
    const res = await fetchData(`${process.env.BASE_URL_API}/pets`, {
      next: {
        tags: ["get-all-pets"]
      }
    })
    return await res.json()
  } catch (error) {
    return error
  }
}
