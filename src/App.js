import "./App.css";
import Banner from "./components/Banner/Banner";
// import ContactBanner from "./components/ContactBanner/ContactBanner";
// import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/navigation/Navigation";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      {/* <ContactBanner /> */}
      <Services />
      <Solutions />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
