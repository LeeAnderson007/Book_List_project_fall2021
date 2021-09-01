// import React, { useState } from "react";

// const Counter = (props) => {
//   const { teenCrush, yo } = props;
//   // general about useState
//   // useState returns a array,
//   // the first thing in the array is the state
//   // the second thing is the way to setState
//   // setState take 1 argument which is default state
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   console.log("Counter Rendering");
//   return (
//     <div>
//       <h1>
//         {teenCrush}: {count}
//       </h1>
//       <p>yo:{yo}</p>
//       <button onClick={increment}>add</button>
//       <button onClick={() => setCount(count - 1)}>minus</button>
//     </div>
//   );
// };

// export const ALERT_COLOR = "red";
// export const SUCCESS_COLOR = "green";

// export default Counter;