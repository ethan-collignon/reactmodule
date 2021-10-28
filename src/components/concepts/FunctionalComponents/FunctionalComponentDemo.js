const FunctionalComponentDemo = () => {
    return(
       <div className='main'>
           <div className='mainDiv'>
               <h1>Functional Components</h1>
               <p>Functional Components are the primary tool used in React to build a small, modular piece of your application.</p>
               <dl>
                   <dt>Can access state</dt>
                   <dd>By passing props, Functional Components are capable of both rendering state variables for display, as well as updating the value of state variable(s). We'll take a deeper dive into state and props later on - so don't fret if that doesn't make sense right now.</dd>
                   <dt>No <i>this</i> keyword</dt>
                   <dd>Class Components (or stateful components) in React will always require the use of the <i>this</i> keyword when initializing an object using the constructor method. Functional Components (or display components), however, are instanceless - meaning they have no access to the <i>this</i> keyword.</dd>
                   <dt><i>return()</i></dt>
                   <dd>Functional Components (as well as Class Components) must return a single element - but the single element returned from the function may have children elements nested inside of it.</dd>
               </dl>
           </div>
       </div>
    );
};

export default FunctionalComponentDemo;