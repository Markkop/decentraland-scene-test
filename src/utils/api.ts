export async function getPokemonById(id: string) {
  // https://docs.decentraland.org/development-guide/network-connections/
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
  const json = await response.json()
  return json.name
}