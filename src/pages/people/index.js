import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { people: data },
  };
};
export default function People({ people }) {
  return (
    <section>
      <h1>People</h1>
      {people.map((person) => (
        <article key={person.id}>
          <Link className="px-4 bg-black block mx-4 my-2 hover:border-l-2 border-primary transition-all duration-75" href={`/people/${person.id}`}>
            <h3>{person.name}</h3>
          </Link>
        </article>
      ))}
    </section>
  );
}
