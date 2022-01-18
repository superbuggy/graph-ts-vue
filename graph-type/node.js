"use strict";
exports.__esModule = true;
exports.GraphNode = void 0;
var uuid_1 = require("uuid");
var GraphNode = /** @class */ (function () {
    function GraphNode(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.uuid = "node::".concat((0, uuid_1.v4)());
        this.edges = [];
    }
    GraphNode.prototype.update = function (payload) {
        switch (payload.action) {
            case 'ADD_EDGE':
                this.addEdge(payload.edge);
                break;
            case 'REMOVE_EDGE':
                this.removeEdge(payload.edge);
                break;
            default:
                return null;
        }
    };
    GraphNode.prototype.addEdge = function (edge) {
        if (this.edges.map(function (_a) {
            var uuid = _a.uuid;
            return uuid;
        }).includes(edge.uuid)) {
            throw new Error('Edge already exists in Node\'s edgelist');
        }
        this.edges.push(edge);
    };
    GraphNode.prototype.removeEdge = function (edge) {
        if (!this.edges.map(function (_a) {
            var uuid = _a.uuid;
            return uuid;
        }).includes(edge.uuid)) {
            throw new Error('Edge does not exist in Node\'s edgelist');
        }
        this.edges = this.edges.filter(function (_a) {
            var uuid = _a.uuid;
            return uuid !== edge.uuid;
        });
    };
    return GraphNode;
}());
exports.GraphNode = GraphNode;
