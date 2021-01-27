import Link from "next/link";

export default function Home() {
  return (
    <div>
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

      <Link href="/ninjas">
        <a>See all Ninjas</a>
      </Link>
    </div>
  );
}
