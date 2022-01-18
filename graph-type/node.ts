import { v4 as uuidv4 } from 'uuid'
import type { GraphEdge } from './edge'
import type { NodeUpdateActionPayload } from './node-update-action-payload'

class GraphNode {
  data: Record<string, unknown>
  uuid: string
  edges: GraphEdge[]

  constructor (data = {}) {
    this.data = data
    this.uuid = `node::${uuidv4()}`
    this.edges = []
  }

  update (payload: NodeUpdateActionPayload) : void {
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

  addEdge (edge: GraphEdge) : void {
    if (this.edges.map(({ uuid }) => uuid).includes(edge.uuid)) {
      throw new Error('Edge already exists in Node\'s edgelist')
    }

    this.edges.push(edge)
  }

  removeEdge (edge: GraphEdge) : void{
    if (!this.edges.map(({ uuid }) => uuid).includes(edge.uuid)) {
      throw new Error('Edge does not exist in Node\'s edgelist')
    }

    this.edges = this.edges.filter(({ uuid }) => uuid !== edge.uuid)
  }
}

export { GraphNode }
