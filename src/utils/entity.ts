export function updateTextEntity(textEntity: Entity, text: string) {
  textEntity.getComponent(TextShape).value = text
}