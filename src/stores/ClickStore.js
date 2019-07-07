import { types } from 'mobx-state-tree';

const ClickStore = types
  .model('ClickStore', {
    clickCount: types.optional(types.integer, 0),
    clickValue: types.optional(types.integer, 1),
    nextLevelValue: types.optional(types.integer, 10),
    level: types.optional(types.integer, 1)
  })
  .views(self => ({
    get numberOfClicks() {
      return self.clickCount 
    },
    get numberOfLevel() {
      return self.level
    }
  }))
  .actions(self => ( {
    addClick() {
        self.clickCount = self.clickCount + self.clickValue
        self.setLevel()
    },
    setLevel() {
      if (self.clickCount === self.nextLevelValue) {
        self.level++
        self.nextLevelValue *= 2 
      }
      
    }
  }))

export default ClickStore


// class WordsStore {
//   @observable wordModels = new Map()
//
//   @computed get worldList() {
//     return Array.from(this.wordModels.values())
//   }
//
//   @action addWord(word) {
//     this.wordModels.set()
//   }
// }
