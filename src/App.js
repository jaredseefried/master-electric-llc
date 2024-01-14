import "./App.css";
import Banner from "./components/Banner/Banner";
import ContactBanner from "./components/ContactBanner/ContactBanner";
// import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/navigation/Navigation";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <ContactBanner />
      <Services />
      <Reviews />
    </div>
  );
}

export default App;
