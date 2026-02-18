import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "./pages/NotFound/NotFound";
import Newsletter from "./pages/Newsletter/Newsletter";
import CampusAmb from "./pages/CampusAmb/CampusAmb";
import Home from "./pages/Home/Home";

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/ca" element={<CampusAmb />} />

      {/* Redirects */}
      <Route
        path="/secondcommit"
        element={<ExternalRedirect to="https://tally.so/r/pbe2E8" />}
      />
      <Route
        path="/gallery"
        element={
          <ExternalRedirect to="https://www.playbook.com/s/makeaton/make-a-ton-8-0" />
        }
      />
      <Route
        path="/upsidedownfeedback"
        element={<ExternalRedirect to="https://tally.so/r/jabykR" />}
      />
      <Route
        path="/upsidedowngallery"
        element={
          <ExternalRedirect to="https://photos.app.goo.gl/ctgo3M3sZUH6hzDF8" />
        }
      />
      <Route
        path="/callforproduction"
        element={<ExternalRedirect to="https://tally.so/r/jaalg4" />}
      />
      <Route
        path="/insta"
        element={
          <ExternalRedirect to="https://www.instagram.com/makeaton.cusat" />
        }
      />
      <Route
        path="/linkedin"
        element={
          <ExternalRedirect to="https://www.linkedin.com/company/makeaton" />
        }
      />
      <Route
        path="/whatsapp"
        element={
          <ExternalRedirect to="https://www.whatsapp.com/channel/0029ValGCQM60eBjNF5wS10C" />
        }
      />
      <Route
        path="/telegram"
        element={<ExternalRedirect to="https://t.me/makeaton7" />}
      />
      <Route
        path="/x"
        element={<ExternalRedirect to="https://x.com/MakeatonCusat" />}
      />
      <Route
        path="/ideawall"
        element={
          <ExternalRedirect to="https://make-a-ton.github.io/The_Second_Commit/" />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
