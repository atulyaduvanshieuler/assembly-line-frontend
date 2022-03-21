import {ComponentType} from "react";
import App from "./App";
import {Route, Switch} from "react-router-dom";
import React from "react";
import FourOhFour from "./components/shared/FourOhFour.component";
import WelcomeComponent from "./components/shared/welcome.component";
import LoginComponent from './containers/auth/login.component';
import InventoryComponent from "./containers/inventory/inventory.component";
import CommonComponent from "./containers/commonpage/common.component";
//import AppPath from "./AppPath.constants";
import RegisterVehicleComponent  from './containers/assembly_components/register_new_emch_number/register_new_emch_number.component';
import EditVehicleComponent from './containers/assembly_components/edit_existing_vehicle/edit_existing_vehicle.component';
import formComponent  from "./containers/l5-vehicle-deployment/l5_vehicle_deployment.component";

interface RouteProps {
	path: string;
	key: string;
	exact: boolean;
	component: ComponentType
}

const Routes: Array<RouteProps> = [
	{
		path: '/',
		key: 'app',
		exact: true,
		component: App
	},
	{
		path: '/login',
		key: 'login',
		exact: true,
		component: LoginComponent
	},
	{
		path: '/welcome',
		key: 'test',
		exact: true,
		component: WelcomeComponent
	},
	{
		path: '/inventory',
		key: 'inventory',
		exact: true,
		component: InventoryComponent
	},
	{
		path: '/common',
		key: 'commonpage',
		exact: true,
		component: CommonComponent
	},
	{
		path: '/registervehicle',
		key: 'registernewvehicle',
		exact: true,
		component: RegisterVehicleComponent
	},
	{
		path: '/editvehicle',
		key: 'editvehicle',
		exact: true,
		component: EditVehicleComponent
	},
	{
		path: '/l5',
		key: 'l5',
		exact:true,
		component: formComponent
	}
	
]

const RouteWithSubRoutes = (route: any) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => <route.component {...props} routes={route.routes} />}
		/>
	);
}

export const RenderRoutes = ({routes}: any) => {
	return (
		<Switch>
			{
				routes.map((route: RouteProps) => <RouteWithSubRoutes {...route} />)
			}
			<Route component={FourOhFour} />
		</Switch>
	);
}

export default Routes;
