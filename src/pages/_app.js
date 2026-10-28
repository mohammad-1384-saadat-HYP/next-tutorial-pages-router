import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      header
      <Component {...pageProps} />
      footer
    </>
  );
}
