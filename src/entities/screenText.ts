export function addMonitorScreenTextEntity(screen: Entity, initialText: string) {
  // https://docs.decentraland.org/development-guide/text/
  const textEntity = new Entity()
  textEntity.addComponent(new Transform({ 
    position: new Vector3(0, 0, -0.0001) ,
    scale: new Vector3(0.1, 0.2, 1),
  }))
  const text = new TextShape(initialText)
  text.color = Color3.Black()
  text.fontSize = 8
  text.width = 10
  text.textWrapping = true
  textEntity.addComponent(text)
  textEntity.setParent(screen)
  return textEntity
}