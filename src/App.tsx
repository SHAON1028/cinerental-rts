import "./App.css";
import Sidebar from "./Sidebar";

import Header from "./Header";
import Movielist from "./cine/Movielist";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />

          <Movielist />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
