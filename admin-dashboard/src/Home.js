import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import React, { useState } from 'react';

function Home() {
	const [activeComponent, setActiveComponent] = useState('Dashboard');

	const switchComponent = (component) => {
	  setActiveComponent(component);
	};
  
  return (
	<div className="AppGlass">
		<Sidebar switchComponent={switchComponent} />
		{activeComponent === 'Dashboard' && <MainDash />}
		{activeComponent === 'Orders' && <Orders />}
		{activeComponent === 'Customers' && <Customers />}
		{activeComponent === 'Products' && <Products />}
		<RightSide />
	</div>
  );
}

export default Home;