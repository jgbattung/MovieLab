import { useEffect  } from "react";
import Navbar from "./components/Navbar";
import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <div className="container">
      <Navbar />
      <SearchMovies/>
    </div>
  );
}

export default App;
