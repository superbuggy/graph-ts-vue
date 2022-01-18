import type { GraphNode } from './node'
class Graph {
  #nodes: Array<GraphNode>
  #unexpandedNodes: Array<GraphNode>
  #expandedNodes: Array<GraphNode>

  constructor (nodes: Array<GraphNode> = []) {
    this.#nodes = nodes
    this.initNodeLists()
  }

  get nodes (): Array<GraphNode> {
    return this.#nodes
  }

  get nodeIds () : Array<string> {
    return this.#nodes.map(node => node.uuid)
  }

  private initNodeLists () : void {
    this.#unexpandedNodes = []
    this.#expandedNodes = []
  }

  traverse (start: GraphNode, goal: GraphNode): Array<GraphNode> {
    this.#unexpandedNodes.push(start)
    while (this.#unexpandedNodes.length > 0) {

    }
    return []
  }

  addNode (node: GraphNode) : void {
    if (this.nodeIds.includes(node.uuid)) {
      throw new Error('Node already exists in graph, cannot add again')
    }
    this.nodes.push(node)
  }

  removeNode (nodeToRemove: GraphNode) : void{
    if (!this.nodeIds.includes(nodeToRemove.uuid)) {
      throw new Error('Node does not exist in graph, cannot remove')
    }
    this.nodes.filter(node => nodeToRemove.uuid !== node.uuid)
  }
}

export { Graph }
