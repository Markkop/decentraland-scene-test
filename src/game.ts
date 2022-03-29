import { getUserData, UserData } from "@decentraland/Identity"

// https://docs.decentraland.org/development-guide/preview-scene/
// https://docs.decentraland.org/development-guide/remote-scene-considerations/

/// --- Set up a system ---

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      // transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

// Add a new instance of the system to the engine
engine.addSystem(new RotatorSystem())

/// --- Spawner function ---

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)

cube.addComponent(
  new OnPointerDown(() => {
    cube.getComponent(Transform).scale.z *= 10.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)

let monitor = new Entity()
monitor.addComponent(new GLTFShape("models/monitor.glb"))
monitor.addComponent(
  new Transform({
    position: new Vector3(5, 1.33, 4),
    scale: new Vector3(5, 5, 5),
  })
)
engine.addEntity(monitor)


monitor.addComponent(
  new OnPointerDown(() => {
    // https://docs.decentraland.org/development-guide/network-connections/
    executeTask(async () => {
      try {
        let userData: UserData | null

        // https://docs.decentraland.org/development-guide/user-data/
        userData = await getUserData()
        log({userData})

        const callUrl = 'https://reqres.in/api/users'
        let response = await fetch(callUrl, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            name: userData?.displayName,
            movies: [userData?.publicKey]
        },)
        })
        log(response)
        let json = await response.json()
        log(json)
      } catch(err) {
        log("failed to reach URL" + err)
      }
    })
  })
)