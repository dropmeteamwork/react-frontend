import "./App.css";
import NavBar from "./components/NavBar";
import MetricsCard from "./components/MetricsCard";

export default function App() {
  return (
    <>
    <NavBar/>
    <div className="p-4 min-h-screen bg-secondary-color">
      <MetricsCard/>
    </div>
    </>
  );
}
