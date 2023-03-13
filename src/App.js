import Navbar from "./components/Navbar";
import {useState} from 'react'
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [tab, setTab] = useState("portfolio");
  return (
    <div >
      <Navbar tab={tab} setTab={setTab}/>
      {tab ==="aboutme" ?
         (<AboutMe />):
         tab==="portfolio" ?
         (<Portfolio />):
         tab==="resume" ?
         (<Resume />):
         tab==="contact" ?
         (<Contact />):
         null
         }
        <Footer />
    </div>
  );
}

export default App;
