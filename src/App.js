import DrawerAppBar from "./component/Header/DrawerAppBar";
import Home from "./component/Body/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./component/Body/Resume/Resume";


function App() {
  return (
    <BrowserRouter>
<DrawerAppBar/>
<Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/resume" element={<Resume/>}></Route>
</Routes>


    </BrowserRouter>
      
  
    
    
    


  );
}

export default App;
