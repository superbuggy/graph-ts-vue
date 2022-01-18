"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Graph_nodes;
exports.__esModule = true;
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph(nodes) {
        if (nodes === void 0) { nodes = []; }
        _Graph_nodes.set(this, void 0);
        __classPrivateFieldSet(this, _Graph_nodes, nodes, "f");
    }
    Object.defineProperty(Graph.prototype, "nodes", {
        get: function () {
            return __classPrivateFieldGet(this, _Graph_nodes, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "nodeIds", {
        get: function () {
            return __classPrivateFieldGet(this, _Graph_nodes, "f").map(function (node) { return node.uuid; });
        },
        enumerable: false,
        configurable: true
    });
    Graph.prototype.addNode = function (node) {
        if (this.nodeIds.includes(node.uuid)) {
            throw new Error('Node already exists in graph, cannot add again');
        }
        this.nodes.push(node);
    };
    Graph.prototype.removeNode = function (nodeToRemove) {
        if (!this.nodeIds.includes(nodeToRemove.uuid)) {
            throw new Error('Node does not exist in graph, cannot remove');
        }
        this.nodes.filter(function (node) { return nodeToRemove.uuid !== node.uuid; });
    };
    return Graph;
}());
exports.Graph = Graph;
_Graph_nodes = new WeakMap();
