import './App.css';
import Sidebar from './components/ui/Sidebar';
import SkymetDashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed width */}
      <Sidebar />

      {/* Main content - should take remaining space */}
      <div className="flex-1 overflow-y-auto">
        <SkymetDashboard />
      </div>
    </div>
  );
}

export default App;
