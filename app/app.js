// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Board = require("./components/Board");
var Game = require("./components/Game");


Game.observe(function (knightPosition) {
    ReactDOM.render( 
    <Board knightPosition={knightPosition} />
, document.getElementById("app")
    );
});

