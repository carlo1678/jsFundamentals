// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// export default class Call extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = [];
//   }
//   render() {
//     const baseUrl = "https://api.spacexdata.com/v2/rockets";
//     const searchForm = document.querySelector(".searchForm");
//     searchForm.addEventListener("submit", fetchSpace);

//     function fetchSpace() {
//       fetch(baseUrl)
//         .then((result) => {
//           return result.json();
//         })
//         .then((json) => {
//           console.log(json);
//         });
//     }

//     return (
//       <div>
//         <h1>Space X</h1>

//         <form className="searchForm" action="">
//           <button id="submit">Submit</button>
//         </form>

//         <div>
//           <ul></ul>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Call />, document.getElementById("root"));
