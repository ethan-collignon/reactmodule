import {
    Route,
    Link,
   Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import ClassComponentDemo from '../concepts/ClassComponents/ClassComponentDemo';
import JSX from '../concepts/JSX/JSX';
import State from '../concepts/State/State';
import Props from '../concepts/Props/Props';
import LifecycleMethods from '../concepts/LifecycleMethods/LifecycleMethods';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import MovieApp from '../apps/the-movie-db/MovieApp';


const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/classcomponent'>Class Component</Link></li>
                    <li><Link to='/jsx'>JSX</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                    <li><Link to='/lifecyclemethods'>LifeCycle Methods</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to='/movieapp'>MoveApp</Link></li>
                </ul>
            </div>
           <div className='sidebar-route'>
               <Switch>
                   <Route exact path='/home'><Home /></Route>
                   <Route exact path='/resources'><Resources /></Route>
                   <Route exact path='/'><Home /></Route>
                   <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route> 
                   <Route exact path='/classcomponent'><ClassComponentDemo /></Route>
                   <Route exact path='/jsx'><JSX /></Route>
                   <Route exact path='/state'><State /></Route>
                   <Route exact path='/props'><Props /></Route>
                   <Route exact path='/lifecyclemethods'><LifecycleMethods /></Route>
                   <Route exact path="/timer"><TimePiecesApp /></Route>
                   <Route exact path="/movieapp"><MovieApp /></Route>
               </Switch>
           </div>
       </div>
   );
};

export default Sidebar;