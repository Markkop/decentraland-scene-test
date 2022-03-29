import { UserData } from "@decentraland/Identity"
import { getPokemonAndUpdateText } from "../tasks/getPokemonAndUpdateText"

export function getPokemonOnClick(userData: UserData | null, textEntity: Entity) {
  // https://docs.decentraland.org/development-guide/click-events/
  return new OnPointerDown(() => {
    if (!userData?.publicKey) return
    getPokemonAndUpdateText(userData.publicKey, textEntity)
  })
}