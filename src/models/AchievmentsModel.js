import { types } from 'mobx-state-tree'

const AchievmentsModel = types
  .model('AchievmentsModel', {
    id: types.identifier,
    text: types.string,
    value: types.integer,
    type: types.string,
    status: types.integer
  })

export default AchievmentsModel
