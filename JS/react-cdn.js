const parent=document.getElementById("root")
const element=React.createElement("h1",{},"This is new heading")
const ele1=React.createElement("h2",{},"Hehehee")
var l=[element,ele1,("h3",{},"Huhuhu")]
const para=React.createElement("p",{},"gfytfytc")
// const para=<p>tfukug hgfdtr jyhgfhtggrdx</p>
const root=ReactDOM.createRoot(parent);
    root.render([ele1,l,para])
    // root.render(l)