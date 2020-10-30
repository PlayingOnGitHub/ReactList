import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: []
        }
        this.addItem = this.addItem.bind(this)
    }
    addItem() {
        let inputField = document.getElementById("input-item");
        let newItem = inputField.value;
        this.setState((prevState) => ({
            listItems: prevState.listItems.concat(newItem)
        }));
        inputField.value = "";
    }
    render() {
        return(
            <div>
                <input type="text" id="input-item" />
                <button id="add-item" onClick={this.addItem}>Add Item</button>
                <List listItems={this.state.listItems}/>
            </div>
        )
    }
}

export default App;
