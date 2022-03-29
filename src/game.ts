import { getUserData, UserData } from "@decentraland/Identity"

// https://docs.decentraland.org/development-guide/preview-scene/
// https://docs.decentraland.org/development-guide/remote-scene-considerations/

export function splitAndSumNumbers(numberText: string): string {
  const splittedNumbers = numberText.split('').map(Number)
  const sum = String(splittedNumbers.reduce((sum: number, number: number) => sum + number, 0))
  if (sum.length === 1) {
      return sum
  }
  return splitAndSumNumbers(sum)
}

const monitor = new Entity()
monitor.addComponent(new GLTFShape("models/monitor.glb"))
monitor.addComponent(
  new Transform({
    position: new Vector3(5, 1.33, 4),
    scale: new Vector3(5, 5, 5),
  })
)
engine.addEntity(monitor)

const screen = new Entity()
screen.addComponent(new Transform({ 
  position: new Vector3(0, 0, 0) ,
  scale: new Vector3(0.9, 0.35, 1),
  rotation: new Quaternion(0, 1, 0, 0),
}))
screen.addComponent(new PlaneShape())
screen.setParent(monitor)

// https://docs.decentraland.org/development-guide/text/
const textEntity = new Entity()
textEntity.addComponent(new Transform({ 
  position: new Vector3(0, 0, -0.0001) ,
  scale: new Vector3(0.1, 0.2, 1),
}))
const text = new TextShape("Login and discover your pokemon!")
text.color = Color3.Black()
text.fontSize = 8
text.width = 10
text.textWrapping = true
textEntity.addComponent(text)
textEntity.setParent(screen)


let userData: UserData | null

executeTask(async () => {
  // https://docs.decentraland.org/development-guide/user-data/
  userData = await getUserData()
  log({userData})
  if (!userData?.publicKey) return
  textEntity.getComponent(TextShape).value = `Hey ${userData.publicKey}\nClick me to discover your pokemon!`
})

// https://docs.decentraland.org/development-guide/click-events/
const discoverPokemonComponent = new OnPointerDown(() => {
  executeTask(async () => {
    try {
      if (!userData?.publicKey) return

      // https://docs.decentraland.org/development-guide/network-connections/

      textEntity.getComponent(TextShape).value = `Please wait...`
      const numberText = userData.publicKey.replace(/\D/g, '')
      const id = splitAndSumNumbers(numberText)
      const callUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
      let response = await fetch(callUrl, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      })
      log(response)
      let json = await response.json()
      textEntity.getComponent(TextShape).value = `Your pokemon is ${json.name}`
      log(json)
    } catch(err) {
      log("failed to reach URL" + err)
    }
  })
})

monitor.addComponent(discoverPokemonComponent)
screen.addComponent(discoverPokemonComponent)