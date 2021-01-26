import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam alias,
        dolorem aspernatur provident odit expedita minus fugit consequuntur
        maxime eos?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam alias,
        dolorem aspernatur provident odit expedita minus fugit consequuntur
        maxime eos?
      </p>
      <Footer />
    </div>
  );
}
