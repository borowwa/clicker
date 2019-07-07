import { types } from 'mobx-state-tree'
import ClickStore from '../stores/ClickStore';
import AchievmentsStore from './AchievmentsStore';

const AppStore = types
  .model('AppStore', {
    ClickStore: types.optional(ClickStore, {}),
    AchievmentsStore: types.optional(AchievmentsStore, {}),
  })

export default AppStore
