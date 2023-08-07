import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"; 
import Footer from "./components/Footer";
//import React from "React.Fragment";

// const container=React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [React.createElement(
//         "h1",
//     {
//         id:"title",
//         key:"h1",
//     },
//     "hii my name is nilesh"
//     ),
//     React.createElement(
//        "h1",
//        {
//           id:"title",
//           key:"h1"
//        },
//        "hi am nilesh"
//     ),
//     React.createElement(
//        "h1",
//        {
//         id:"title",
//         key:"h1"
//        } ,
//        "i am from amalner"
//     )
    
// ]

// );



const burgureKing={
    name:"Burger King",
    image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    cusines:["Burger , American"],
    rating:"4.2 stars"
}


      







const AppLayout=()=>{
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);