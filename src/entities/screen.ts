export function addMonitorScreenEntity(monitor: Entity) {
  const screen = new Entity()
  screen.addComponent(new Transform({ 
    position: new Vector3(0, 0, 0) ,
    scale: new Vector3(0.9, 0.35, 1),
    rotation: new Quaternion(0, 1, 0, 0),
  }))
  screen.addComponent(new PlaneShape())
  screen.setParent(monitor)
  return screen
}