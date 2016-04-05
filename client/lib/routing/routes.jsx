import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
// out reactLayout ?
import {Homelayout} from '../../components/layout/home.jsx';
import {Layout} from '../../components/layout/layout.jsx';

publicRoutes = FlowRouter.group({
    name:'publicroutes'
});

privateRoutes = FlowRouter.group({
    name:'privateroutes'
});

publicRoutes.route('/', {
    name:'Home',
    action () { mount(Homelayout, {
        
    })}
});

privateRoutes.route('/dashboard', {
    name:'Dashboard',
    action () { mount(Layout, {
       // sidebar:<div>Sidebar</div>,
       // content:<div>Content</div>
    })
    }
})