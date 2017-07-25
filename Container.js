import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from "react-dnd";

// import Box from "./Box";
import Stuff from "./Stuff";

// console.log(Box);
console.log(Stuff);


class Container extends Component{
    render() {
        return (
        
                <div>
                

                            <Stuff name = "Princess" />
                            <Stuff name = "Knight" />
                            <Stuff name = "Dragon" />
                    
                </div>
         
        );
    }
};

export default Container;
