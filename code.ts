// This plugin exports the IDs of the selected node type.

figma.ui.onmessage = (message) => {
  console.log("got this message from the UI: ", message)
  if(message === 'save') {
    console.log(nodes)
    figma.ui.postMessage(JSON.stringify(nodes,null,2))
  }
}
const listOfNodes: SceneNode[] = figma.currentPage.findAll()
const getName = node => node.name
const getId = node => node.id
const createNode = node => {
  return {
    'name': getName(node),
    'id': getId(node)
  }
}
const isFrameNode = node => node.type === 'FRAME'
const nodes = listOfNodes.filter(isFrameNode).map(createNode)
// select the nodes we are interested in
// extract their nodeIds
// convert to url encoding
// extract frame node name
// build object to export

figma.showUI(__html__)

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();
