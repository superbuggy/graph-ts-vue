// Circular dependency resolution with type imports as recommended below
// https://stackoverflow.com/questions/24444436/circular-type-references-in-typescript
import { Graph, GraphNode, GraphEdge } from './graph-type'

const nodey = new GraphNode({ beep: true })
const nodey2 = new GraphNode({ beep: false })
const egdy = new GraphEdge(nodey, nodey2)
const graphael = new Graph([nodey, nodey2])
console.log(graphael, egdy, nodey, nodey2)

// module.exports = { Graph, GraphEdge, GraphNode }
