const Greeting = () => {
  return (
    <>
      <h1>Hello My Lord.</h1>
      <p>I love you 3000...!</p>
    </>
  );
};

function Loving({ name, age }) {
  return (
    <>
      <h1>Hello {name}</h1>
      {age && <p>I am {age} years old</p>}

    </>
  );
}
export default Loving;

export { Greeting };
