const ChildComponent = (props) => {

    console.log(props);
    
    return(
        <div>
            <h1>Props</h1>
            <p>Props are used to pass data from a parent component to a child component, and they are the main mechanism for component communication. Props are a major part of what allows the React component pattern to work.</p>
            <dl>
                <dt>Passing Data Between Components</dt>
                <dd>{props.descriptionOne}</dd>
                <dt>Passed via HTML Attribute</dt>
                <dd>{props.descriptionTwo}</dd>
                <dt>Read Only</dt>
                <dd>{props.decriptionThree}</dd>
            </dl>
            <div style={{textAlign: 'center'}}>
                <button onClick={props.counter} style={{width: '200px', height: '50px', borderRadius: '5px', backgroundColor: '#333', color: 'white'}}>{props.number}</button>
            </div>
        </div>
    )
}

export default ChildComponent;