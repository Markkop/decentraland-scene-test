import { getPokemonById } from "../utils/api"
import { updateTextEntity } from "../utils/entity"
import { splitAndSumNumbers } from "../utils/numbers"

export function getPokemonAndUpdateText(publicKey: string, textEntity: Entity) {
  executeTask(async () => {
    try {
      if (!publicKey) return
      updateTextEntity(textEntity, `Please wait...`)
      const numberText = publicKey.replace(/\D/g, '')
      const id = splitAndSumNumbers(numberText)
      const pokemonName = await getPokemonById(id)
      updateTextEntity(textEntity, `Your pokemon is ${pokemonName}`)
    } catch(err) {
      log("failed to reach URL" + err)
    }
  })
}