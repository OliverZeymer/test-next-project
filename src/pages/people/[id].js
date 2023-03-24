// get params and then fetch data for that person
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data = await res.json();
  return {
    props: { person: data },
  };
};

export default function Person({ person }) {
  return (
    <section>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <p>{person.website}</p>
      <p>{person.address.city}</p>
    </section>
  );
}
