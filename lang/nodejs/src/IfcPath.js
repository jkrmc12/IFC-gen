
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcOrientedEdge = require('./IfcOrientedEdge')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpath.htm
 */
module.exports = class IfcPath extends IfcTopologicalRepresentationItem {
  
    constructor(edgeList) {
        super()
		this.EdgeList = edgeList

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.EdgeList))

        return parameters.join()
    }
}