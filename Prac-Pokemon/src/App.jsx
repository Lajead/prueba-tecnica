import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceForm from './AttendanceForm';
import AdminView from './AdminView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AttendanceForm />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default App;
