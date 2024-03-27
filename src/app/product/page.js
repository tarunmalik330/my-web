import Head from "next/head";
import Contact from "../../../public/components/Contact";
import Navbar from "../../../public/components/Navbar";
import styles from "../page.module.css";

export default function Product() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>
            <main>
                <Navbar />
                <Contact />
            </main>
        </>
    )
}