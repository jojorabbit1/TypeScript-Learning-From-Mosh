import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello World</h1>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/users/new">Users New folder Page</Link>
      <ProductCard />
    </main>
  );
}
