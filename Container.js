import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from "react-dnd";

import Box from "./Box";
import Stuff from "./Stuff";

console.log(Box);
console.log(Stuff);


export default class Container extends Component{
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <div style = {{ overflow: "hidden", clear: "both" }}>
                    
                        <Box />,
                        
                    </div>

                    <div style={{ overflow: "hidden", clear: "both" }}>

                            <Stuff name = "Princess" />
                            <Stuff name = "Knight" />
                            <Stuff name = "Dragon" />
                        
                    </div>
                </div>
            </DragDropContextProvider>
        );
    }
};
