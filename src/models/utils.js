import uuid from 'uuid/v4'

const id = (UUID) => {
  return {
    type: UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: () => uuid()
  }
}

export { id }
