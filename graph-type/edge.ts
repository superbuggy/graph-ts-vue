import { v4 as uuidv4 } from 'uuid'
import type { GraphNode } from './node'
import type { NodeUpdateActionPayload } from './node-update-action-payload'

class GraphEdge {
  firstNode: GraphNode
  secondNode: GraphNode
  uuid: string

  constructor (firstNode: GraphNode, secondNode: GraphNode) {
    this.uuid = `edge::${uuidv4()}`
    this.firstNode = firstNode
    this.secondNode = secondNode
    this.updateNodesAlongEdge({ action: 'ADD_EDGE', edge: this })
  }

  get nodeIds () : Array<string> {
    return [this.firstNode.uuid, this.secondNode.uuid]
  }

  updateNodesAlongEdge (action: NodeUpdateActionPayload) : void {
    [this.firstNode, this.secondNode].forEach(node => node.update(action))
  }

  destroy () : void {
    const destroyAction = { action: 'REMOVE_EDGE', edge: this }
    this.updateNodesAlongEdge(destroyAction)
  }
}

export { GraphEdge }
