import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import AboutUs from "./Pages/AboutUs";
import Internships from "./Pages/Internships";
import InternshipDetails from "./Pages/InternshipDetails";
import RegisterInternships from "./Pages/RegisterInternships";
import RegisterDone from "./Pages/RegisterDone";
import OurDeveloper from "./Pages/OurDeveloper";
import LoginAdmin from "./Pages/LoginAdmin";
import AddProduct from "./Pages/AddProduct";
import InternshipList from "./Pages/InternshipList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InternshipList />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Details" element={<InternshipDetails />} />
        <Route path="/RegisterIntern" element={<RegisterInternships />} />
        <Route path="/RegisterDone" element={<RegisterDone />} />
        <Route path="/OurDeveloper" element={<OurDeveloper />} />
        <Route path="/AdminLogin" element={<LoginAdmin />} />
        <Route path="/AddProductAdmin" element={<AddProduct />} />
        <Route path="/InternshipsList" element={<InternshipList />} />
      </Routes>
    </Router>
  );
}

export default App;
