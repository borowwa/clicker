import { types } from 'mobx-state-tree';
import AchievmentsModel from '../models/AchievmentsModel';
import AchievmentsBase from './achevments.json'

const AchievmentsStore = types
  .model('AchievmentsStore', {
    AchievmentsModel: types.optional(types.map(AchievmentsModel), {}),
    time1: types.optional(types.integer, 0),
    time2: types.optional(types.integer, 0),
    clickPerSecond: types.optional(types.integer, 0),
    bestClickPerSecond: types.optional(types.integer, 0)
  })
  .views(self => ({
    get listOfAchievments() {
      return  Array.from(self.AchievmentsModel.values()) 
    }
  }))
  .actions(self => ({
    loadAchievments() {
      AchievmentsBase.forEach((oneAchvm) => {
        return self.AchievmentsModel.set(oneAchvm.id, { 
          id: oneAchvm.id, 
          text: oneAchvm.text, 
          value: oneAchvm.value,
          type: oneAchvm.type, 
          status: oneAchvm.status })
      })
    },
    setTime1() {
      self.time1 = Math.floor(new Date().getTime() / 1000);
    },
    checkHowFast() {
      self.time_2 = Math.floor(new Date().getTime() / 1000);
        if(self.time_1 - self.time_2 === 0){
            self.clickPerSecond++;
            if (self.clickPerSecond > self.bestClickPerSecond){
              self.bestClickPerSecond = self.clickPerSecond 
              self.listOfAchievments.map((achv) => {
                if(achv.type === "speed" && achv.value === self.bestClickPerSecond) {
                  achv.status = 1;
                  self.onChangeListener()
                }
              })
            }
            
        } else {
            self.time_1 = self.time_2;
            self.clickPerSecond = 0;
        }
    },
    checkHowMany(amount) {
      self.listOfAchievments.map((achv) => {
        if(achv.type === "clicks" && achv.value === amount) {
          achv.status = 1;
          self.onChangeListener()
        }
      })
    },
    onSnapshot(storeInstance, newSnapshot) {
      console.log("Got new state: ", newSnapshot)
    }
  }))

export default AchievmentsStore