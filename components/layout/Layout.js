import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, page }) {
  return (
    <>
      <Header page={page} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

// Type check
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClass: PropTypes.string,
};
Layout.defaultProps = {
  pageClass: "",
};

export default Layout;
