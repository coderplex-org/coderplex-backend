import uuid from 'uuid/v4'

const id = (DataTypes) => {
  return {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: () => uuid()
  }
}

export { id }