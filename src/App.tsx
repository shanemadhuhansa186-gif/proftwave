
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ContactPage } from "./pages/ContactPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { HomePage } from "./pages/HomePage";
import { LearnPage } from "./pages/LearnPage";
import { MembershipPage } from "./pages/MembershipPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ResultsPage } from "./pages/ResultsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
