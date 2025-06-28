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
import InternshipDetailsAdmin from "./Pages/InternshipDetailsAdmin";
import KontenAktifAdmin from "./Pages/KontenAktifAdmin";
import EditKontenAdmin from "./Pages/EditKontenAdmin";
import PartnershipsList from "./Pages/PartnershipsList";
import AddPartnershipAdmin from "./Pages/AddPartnershipAdmin";
import TerarsipkanAdmin from "./Pages/TerarsipkanAdmin";
import DetailsProduct from "./Pages/DetailsProduct";
import PrivateRoute from "./Pages/utils/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Details/:id" element={<InternshipDetails />} />
        <Route path="/RegisterIntern/:id" element={<RegisterInternships />} />
        <Route path="/RegisterDone" element={<RegisterDone />} />
        <Route path="/OurDeveloper" element={<OurDeveloper />} />
        <Route path="/DetailsProduct" element={<DetailsProduct />} />
        <Route path="/AdminLogin" element={<LoginAdmin />} />

        <Route element={<PrivateRoute />}>
          <Route path="/AddProductAdmin" element={<AddProduct />} />
          <Route path="/InternshipsList" element={<InternshipList />} />
          <Route path="/KontentAktifAdmin" element={<KontenAktifAdmin />} />
          <Route path="/KontentAktif/edit/:id" element={<EditKontenAdmin />} />
          <Route
            path="/InternshipsDetailsAdmin/:id"
            element={<InternshipDetailsAdmin />}
          />
          <Route path="/PartnershipAdmin" element={<PartnershipsList />} />
          <Route path="/AddPartnership" element={<AddPartnershipAdmin />} />
          <Route path="/TerarsipkanAdmin" element={<TerarsipkanAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
