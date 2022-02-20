import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import TopBanner from "../components/layout/TopBanner";
import AboutMe from "../components/layout/AboutMe";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";

export default function Home() {
  return (
    <Layout>
      <Head />
      {/* Header */}

      {/* <!-- Main banner --> */}
      <TopBanner />

      {/* <!-- About me section --> */}
      <AboutMe />
      {/* <!-- Projects section --> */}
      <Projects />

      {/* Contact section */}
      <Contact />
    </Layout>
  );
}
