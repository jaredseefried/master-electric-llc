import "./App.css";
import Banner from "./components/Banner/Banner";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/navigation/Navigation";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <MainContent />
      <ContactBanner />
      <Services />
    </div>
  );
}

export default App;
