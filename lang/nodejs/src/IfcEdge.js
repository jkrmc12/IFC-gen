
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVertex = require('./IfcVertex')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm
 */
module.exports = class IfcEdge extends IfcTopologicalRepresentationItem {
  
    constructor(edgeStart, edgeEnd) {
        super()
		this.EdgeStart = edgeStart
		this.EdgeEnd = edgeEnd

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))

        return parameters.join()
    }
}