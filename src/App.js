import "./App.css";
import Banner from "./components/Banner/Banner";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <MainContent />
      <ContactBanner />
    </div>
  );
}

export default App;
