import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home/Home";
import Layout from "../components/layout";
import NotFound from "../components/NotFound/NotFound";
import Projects from "../components/Projects";
import AJS from "../components/Projects/components/Ajs/AJS";
import BSport from "../components/Projects/components/BSport";
import EdeelBux from "../components/Projects/components/EdeelBux";
import HRM from "../components/Projects/components/HRM";
import InvestmentMind from "../components/Projects/components/InvestmentMind";
import LMS from "../components/Projects/components/LMS";
import MillionMart from "../components/Projects/components/MillionMart";
import Society from "../components/Projects/components/Society/Society";
import Skills from "../components/Skills";
const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="soceity" element={<Society />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="ajs" element={<AJS />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="million-mart" element={<MillionMart />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="bsport" element={<BSport />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="edeel" element={<EdeelBux />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="investment" element={<InvestmentMind />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="lms" element={<LMS />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="hrm" element={<HRM />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="skills" element={<Skills />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route exact={true} element={<Layout />}>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};
export default Router;
