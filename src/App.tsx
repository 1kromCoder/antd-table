import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedUsersTable from "./modules/SelectedTable";
import CustomTable from "./modules/Table";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomTable />} />
        <Route path="/selected" element={<SelectedUsersTable />} />
      </Routes>
    </Router>
  );
}
export default App;
