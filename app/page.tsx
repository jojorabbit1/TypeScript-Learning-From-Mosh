import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello World</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
