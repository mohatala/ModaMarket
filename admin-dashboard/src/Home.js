import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function Home() {
  return (
	  <div className="AppGlass">
		<Sidebar/>
		<MainDash/>
		<RightSide/>
	  </div>
  );
}

export default Home;