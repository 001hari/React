

//     React lec 1 ep 4
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"I'm a h1 tag"))
);




// const heading = React.createElement("h1",{},"hello react");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);