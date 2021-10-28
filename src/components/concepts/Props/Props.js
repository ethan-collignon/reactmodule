import React from 'react';
import ChildComponent from './ChildComponent/ChildComponent';

class Props extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionOne: 'Props give us the ability to pass data from a parent component down to a child component. Data within React flows uni-directionally, which means we can only pass props down to any subsequent child components called by the parent.',
            descriptionTwo: 'To send props down to a child component, you simply add an attribute to the call of the component that needs to receive the data.',
            descriptionThree: 'Whether you declare a component as a class component or a functional component, it must never modify its own props.',
            number:0
        }
        
        this.counter = this.counter.bind(this);
    }

    counter() {
        this.setState({
           number: this.state.number + 1
        })
     }

    render() {
        return(
            <div className='main'>
                <div className='mainDiv'>
                    <ChildComponent descriptionOne={this.state.descriptionOne} descriptionTwo={this.state.descriptionTwo} descriptionThree={this.state.descriptionThree} number={this.state.number} counter={this.counter} />
                </div>
            </div>
        )
    }
}

export default Props;