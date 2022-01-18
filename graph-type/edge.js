"use strict";
exports.__esModule = true;
exports.GraphEdge = void 0;
var uuid_1 = require("uuid");
var GraphEdge = /** @class */ (function () {
    function GraphEdge(firstNode, secondNode) {
        this.uuid = "edge::".concat((0, uuid_1.v4)());
        this.firstNode = firstNode;
        this.secondNode = secondNode;
        this.updateNodesAlongEdge({ action: 'ADD_EDGE', edge: this });
    }
    Object.defineProperty(GraphEdge.prototype, "nodeIds", {
        get: function () {
            return [this.firstNode.uuid, this.secondNode.uuid];
        },
        enumerable: false,
        configurable: true
    });
    GraphEdge.prototype.updateNodesAlongEdge = function (action) {
        [this.firstNode, this.secondNode].forEach(function (node) { return node.update(action); });
    };
    GraphEdge.prototype.destroy = function () {
        var destroyAction = { action: 'REMOVE_EDGE', edge: this };
        this.updateNodesAlongEdge(destroyAction);
    };
    return GraphEdge;
}());
exports.GraphEdge = GraphEdge;
