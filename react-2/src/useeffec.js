import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);
  const [counter, setCounter] = React.useState(1);

  /**
   * Quiz:
   * 1. What will happen if I put back our Star Wars API call
   *    into the effect function?
   * 2. How will the useEffect be different if I use
   *    setStarWarsData() instead of console.log()
   * 3. What SHOULD be in our dependencies array in this case?
   */

  // console.log("Effect ran 8")
  // React.useEffect(function() {
  //     console.log("Effect ran 3")
  //     fetch("https://swapi.dev/api/people/1")
  //         .then(res => res.json())
  //         .then(data => setStarWarsData(data))
  // }, [])
  // console.log("Effect ran 9")
  //output of [count]=> 8 9 3 8 9
  //clicking add=> 8 9 3 8 9
  // ----------
  //[]=> 8 9 3 8 9
  // click add=> 8 9 // 8 9

  React.useEffect(
    function () {
      console.log("Effect ran");
      console.log("Effect ran2");
      fetch(`https://swapi.dev/api/people/${counter}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [counter]
  );
  //[]=>1st time run only
  //[value]=>eff ran 1 eff ran 2
  // clicking if value changes then only ran 1 ran 2

  //     return (
  //         <div>
  //             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
  //             <h2>The count is {count}</h2>
  //             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
  //         </div>
  //     )
  // }

  return (
    <div>
      <h2>The count is {counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
