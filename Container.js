import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

// import Box from "./Box";
import Stuff from "./Stuff";

// console.log(Box);
console.log(Stuff);


class Container extends Component{
    
    render() {
        return (
            <div style = {{
                height: "400px",
                width: "400px",
                border: "5px solid red"
            }}>
                <Stuff name = "&#128009;" />   
                <Stuff name = "&#9822;" />
                <Stuff name = "&#128120;" />

            </div>
        );
    }
};

module.exports = DragDropContext(HTML5Backend)(Container);
