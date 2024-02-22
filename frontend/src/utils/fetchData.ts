import { RequestInit } from "next/dist/server/web/spec-extension/request"

// Inversion Dependency
export default async function fetchData(url: string, config?: RequestInit) {
  return await fetch(url, config)
}
