import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import PageTitle from "./components/PageTitle";
import Resources from "./components/Resources";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PageTitle title="Ressursarkiv" />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
