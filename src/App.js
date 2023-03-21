
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddEmployeeComponent from "./component/AddEmployeeComponent";

function App() {
  return (
    <BrowserRouter>
    <div>
      <HeaderComponent />
    <div className="container">
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employee" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
      </Routes>
      </div>
      <FooterComponent />
      </div>
      </BrowserRouter>
  
   

   
  );
}

export default App;
