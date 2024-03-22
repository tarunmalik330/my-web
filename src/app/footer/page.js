import Features from "../../../public/components/Features";
import Contact from "../../../public/components/Contact";
import styles from "../page.module.css";
import Navbar from "../../../public/components/Navbar";

export default function Footer() {
    return (
        <>
            <Navbar/>
            <Contact />
            <Features />
        </>
    );
}