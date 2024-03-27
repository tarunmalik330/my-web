import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <ul className="nav_link d-flex gap-5 mt-45 mb-45">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/product"}>Contact</Link>
          <Link href={"/footer"}>Features</Link>
        </ul>
      </div>
    </>
  );
}
