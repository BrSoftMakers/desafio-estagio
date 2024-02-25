"use server"

import fetchData from "@/utils/fetchData"

export default async function getAll() {
  try {
    const res = await fetchData(`${process.env.BASE_URL_API}/pets`, {
      next: {
        revalidate: 60,
        tags: ["get-all-pets"]
      }
    })
    return res.json()
  } catch (error) {
    return error
  }
}
