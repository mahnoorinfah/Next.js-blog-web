import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-5 ">
        <ul className="container flex gap-10 justify-center bg-slate-100 p-5  ">
          <li className="hover:text-rose-400">
            <Link href="/About">Home</Link>
          </li>
          <li className="hover:text-rose-400">
            <Link href="/responsive">Media Query Example</Link>
          </li>
          <li className="hover:text-rose-400">
            <Link href="/responsive2">Tailwind Example</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}