import { getUserData, UserData } from "@decentraland/Identity"
import { getPokemonOnClick } from "./components/getPokemonOnClick"
import { addMonitorEntity } from "./entities/monitor"
import { addMonitorScreenEntity } from "./entities/screen"
import { addMonitorScreenTextEntity } from "./entities/screenText"
import { updateTextEntity } from "./utils/entity"

// To preview the scene with Web3, follow these instructions:
// https://docs.decentraland.org/development-guide/preview-scene/

// Entities are not updated for other player unless coded this way. See:
// https://docs.decentraland.org/development-guide/remote-scene-considerations/

let userData: UserData | null = null

const monitor = addMonitorEntity()
const monitorScreen = addMonitorScreenEntity(monitor)
const initialText = "Login and discover your pokemon!"
const monitorScreenText = addMonitorScreenTextEntity(monitorScreen, initialText)

// I couldn't move this task to another file because it wouldn't update "userData" variable in this context.
// Maybe the solution is using systems? 
// https://docs.decentraland.org/development-guide/systems/
executeTask(async () => {
  // https://docs.decentraland.org/development-guide/user-data/
  userData = await getUserData()
  if (!userData?.publicKey) return
  updateTextEntity(monitorScreenText, `Hey ${userData.publicKey}\nClick me to discover your pokemon!`)

  const getPokemonOnClickComponent = getPokemonOnClick(userData, monitorScreenText)
  monitor.addComponent(getPokemonOnClickComponent)
  monitorScreen.addComponent(getPokemonOnClickComponent)
})