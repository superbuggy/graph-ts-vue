const {v4: uuidv4} = require('uuid')

class Graph {
  #nodes

  constructor(nodes = []) {
    this.#nodes = nodes
  }

  get nodes() {
    return this.#nodes
  }

  get nodeIds() {
    return this.nodes.map(node => node.uuid)
  }

  addNode(node) {
    if (this.nodeIds.includes(node.uuid)) {
      throw new Error('Node already exists in graph, cannot add again')
    }
    this.nodes.push(node)
  }
  if(this.edges.map(({uuid}) => uuid).includes(edge.uuid)) {
  removeNode(nodeToRemove) {
    if (!this.nodeIds.includes(nodeToRemove.uuid)) {
      throw new Error('Node does not exist in graph, cannot remove')
    }
    this.nodes.filter(node => nodeToRemove.uuid !== node.uuid)
  }
}

class GraphEdge {
  constructor(firstNode, secondNode) {
    if (firstNode.constructor !== GraphNode || secondNode.constructor !== GraphNode) {
      throw new Error(`Invalid type(s) given for nodes (${firstNode} or ${secondNode}).`)
    }
    this.uuid = `edge::${uuidv4()}`
    this.firstNode = firstNode
    this.secondNode = secondNode
    this.updateNodesAlongEdge({action: 'ADD_EDGE', edge: this})
  }

  get nodeIds() {
    return [this.firstNode.uuid, this.secondNode.uuid]
  }

  updateNodesAlongEdge(action) {
    [this.firstNode, this.secondNode].forEach(node => node.update(action))
  }

  destroy() {
    const destroyAction = {action: 'REMOVE_EDGE', edge: this}
    this.updateNodesAlongEdge(destroyAction)
  }
}

class GraphNode {
  constructor(data = {}) {
    this.data = data
    this.uuid = `node::${uuidv4()}`
    this.edges = []
  }

  update(payload = {action: null, edge: null}) {
    switch (payload.action) {
      case 'ADD_EDGE':
        this.addEdge(payload.edge)
        break
      case 'REMOVE_EDGE':
        this.removeEdge(payload.edge)
        break
      default:
        return null
    }
  }

  addEdge(edge) {
    if (this.edges.map(({uuid}) => uuid).includes(edge.uuid)) {
      throw new Error('Edge already exists in Node\'s edgelist')
    }

    this.edges.push(edge)
  }

  removeEdge(edge) {
    if (!this.edges.map(({uuid}) => uuid).includes(edge.uuid)) {
      throw new Error('Edge does not exist in Node\'s edgelist')
    }

    this.edges = this.edges.filter(({uuid}) => uuid !== edge.uuid)
  }
}

const nodey = new GraphNode({beep: true}, [])
const nodey2 = new GraphNode({beep: false}, [])
const egdy = new GraphEdge(nodey, nodey2)
const graphael = new Graph([nodey, nodey2])
console.log(graphael, egdy, nodey, nodey2)

module.exports = {Graph, GraphEdge, GraphNode}
