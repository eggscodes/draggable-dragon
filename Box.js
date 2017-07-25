import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import PropTypes from "prop-types";
import ItemTypes from "./Constants";

console.log(ItemTypes);

const boxTarget = {
    drop( ) {
        return { name: "Box" };
    }
};

@dropTarget(ItemTypes.STUFF, boxTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
})
)
export default class Box extends Component {
    static PropTypes = {
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired
    };

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
                height: "50px",
                width: "50px",
                padding: "5px",
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
