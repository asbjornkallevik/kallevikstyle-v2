import NextHead from "next/head";

function Head({ title }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Kallevikstyle
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="The home of Asbjørn Kallevik."></meta>
    </NextHead>
  );
}

Head.defaultProps = {
  title: "",
};
export default Head;
