import Navbar from "./component/Navbar"
import  ResponsiveAutoExample from "./component/firstcon"
import  ResponsiveAtoExample from "./component/hamburger1"
import ResponsiveAutoExample2 from "./component/Pizza";
import Pizza from "./component/Pizza";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import Testimonials from "./component/Testimonials";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";



  function App() {
  return (
      <>
<Navbar />
<ResponsiveAutoExample />
<ResponsiveAtoExample />
<ResponsiveAutoExample2 />
<Testimonials />
<Newsletter />
<Footer />

      </>
      
      
  );
}


export default App;
