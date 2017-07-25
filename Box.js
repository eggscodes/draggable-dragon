import React, { Component } from "react";
import { DropTarget } from "react-dnd";
// import PropTypes from "prop-types";
import ItemTypes from "./Constants";

console.log(ItemTypes);

const boxTarget = {
    drop: function() {
        return { name: "Box" };
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class Box extends Component {


    render() {
        const { canDrop, isOver,  connectDropTarget } = this.props;
        const isActive = isOver && canDrop;

        let backgroundColor = "blue";
        if (isActive) {
            backgroundColor = "yellow";
        } else if (canDrop) {
            backgroundColor = "green";
        }

        return connectDropTarget (
            <div style = {{
                height: "100px",
                width: "100px",
                border: "1px solid blue",
                borderRadius: "50%",
                margin: "10px",
                float: "left", 
                backgroundColor: {backgroundColor}
             }}>
                {isActive ? `Release to drop` : `Drag an Item here`}          
            </div>
        );
    }
}

module.exports = DropTarget(ItemTypes.STUFF, boxTarget, collect)(Box);
