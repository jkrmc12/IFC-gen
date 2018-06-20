
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVertex = require('./IfcVertex')
const IfcEdge = require('./IfcEdge')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubedge.htm
 */
module.exports = class IfcSubedge extends IfcEdge {
  
    constructor(edgeStart, edgeEnd, parentEdge) {
        super(edgeStart,edgeEnd)
		this.ParentEdge = parentEdge

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))
		parameters.push(BaseIfc.toStepValue(this.ParentEdge))

        return parameters.join()
    }
}