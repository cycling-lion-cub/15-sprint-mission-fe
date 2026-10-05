import { Header } from "../Header";
import { Footer } from "../Footer";
// import * as styles from "./GlobalLayout.css.js";

export default function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
