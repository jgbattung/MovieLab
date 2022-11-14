import { useEffect  } from "react";
import Navbar from "./components/Navbar";
import SearchMovies from "./components/SearchMovies";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Title />
      <SearchMovies/>
    </div>
  );
}

export default App;
