import './App.css';
import Sidebar from './components/ui/Sidebar';
import SkymetDashboard from './Pages/Dashboard';
import Topbar from './components/ui/Topbar';

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Topbar stays at top */}
      <div className="z-10">
        <Topbar />
      </div>

      {/* Content below topbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (on the left) */}
        <div className="">
          <Sidebar />
        </div>

        {/* Main Page */}
        <div className="flex-1 overflow-y-auto">
          <SkymetDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
