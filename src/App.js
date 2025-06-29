import './App.css';
import Sidebar from './components/ui/Sidebar';
import SkymetDashboard from './Pages/Dashboard';
import Topbar from './components/ui/Topbar'; // import the Topbar

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed width */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-[#F9F9F9]">
          <SkymetDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
