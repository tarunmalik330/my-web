import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div>
        <ul className="text-black d-flex gap-5">
          <li>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/product"}>Contact</Link>
            <Link href={"/footer"}>Features</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
