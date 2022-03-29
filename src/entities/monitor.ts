export function addMonitorEntity() {
  const monitor = new Entity()
  monitor.addComponent(new GLTFShape("models/monitor.glb"))
  monitor.addComponent(
    new Transform({
      position: new Vector3(5, 1.33, 4),
      scale: new Vector3(5, 5, 5),
    })
  )
  engine.addEntity(monitor)
  return monitor
}