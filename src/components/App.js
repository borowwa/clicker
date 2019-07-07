import React from 'react';
import Clicker from './Clicker';
import Counter from './Counter';
import { Provider } from 'mobx-react';
import AppStore from '../stores/AppStore';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.store = this.props.store || AppStore.create({})
    }

    render() {
        return (
            <div>
                <Provider store={this.store}>
                    <div>
                    <Clicker />
                    <Counter />
                    </div>
                </Provider>
            </div>
        )
    } 
}

export default App;