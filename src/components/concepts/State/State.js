import React from 'react';

class State extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionOne: "State data is local to the component it's created/stored in.",
            descriptionTwo: "State data is usually representational (data that the user will see) - but it doesn't have to be.",
            descriptionThree: "Along with new props being passed to a component, any change to the state of a component will trigger a re-render of that component.",
            boxOne: false,
            boxTwo: false,
            boxThree: false
        }
    }

    // methods/life-cycle methods will be declared here

    handleChange = (event) => {
       event.target.className === 'boxOne' ? (
           this.setState({
               boxOne: event.target.checked
           })
       ) : event.target.className === 'boxTwo' ? (
           this.setState({
               boxTwo: event.target.checked
           })
       ) : event.target.className === 'boxThree' ? (
           this.setState({
               boxThree: event.target.checked
           })
       ) : console.log('Something went wrong')
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>State</h1>
                    <p>State is an instance of a React Class Component that can be defined as an object. This object holds of a set of observable properties that control the behavior of the component</p>
                    <dl>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <input type='checkbox' className='boxOne' style={{marginRight: '5px'}} onChange={(e) => this.handleChange(e)} />
                                <dt>State data is local</dt>
                            </div>
                            {
                                this.state.boxOne ? (
                                    <dd className='descriptionOne'>{this.state.descriptionOne}</dd>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <input type='checkbox' className='boxTwo' style={{marginRight: '5px'}} onChange={(e) => this.handleChange(e)}/>
                                <dt>Representational</dt>
                            </div>
                            {
                                this.state.boxTwo ? (
                                    <dd className='descriptionTwo'>{this.state.descriptionTwo}</dd>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <input type='checkbox' className='boxThree' style={{marginRight: '5px'}} onChange={(e) => this.handleChange(e)} />
                                <dt>State/props change triggers a re-render</dt>
                            </div>
                            {
                                this.state.boxThree ? (
                                    <dd className='descriptionThree'>{this.state.descriptionThree}</dd>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                    </dl>
                </div>
            </div>
        )
    }
}

export default State;