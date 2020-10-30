import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }
    renderItems(listItems) {
        if (listItems.length == 0) {
            return;
        }

        this.domItems = [];
        listItems.map((listItem, currentIndex) => {
            this.domItems.push(
                <li key={currentIndex}>{listItem}</li>
            );
        });
        return this.domItems;
    }
    render() {
        console.log(this.props.listItems);
        return(
            <ul>
                {this.renderItems(this.props.listItems)}
            </ul>
        )
    }
}

export default List;
