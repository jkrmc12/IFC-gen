
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVertex = require('./IfcVertex')
const IfcCurve = require('./IfcCurve')
const IfcBoolean = require('./IfcBoolean')
const IfcEdge = require('./IfcEdge')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm
 */
module.exports = class IfcEdgeCurve extends IfcEdge {
  
    constructor(edgeStart, edgeEnd, edgeGeometry, sameSense) {
        super(edgeStart,edgeEnd)
		this.EdgeGeometry = edgeGeometry
		this.SameSense = sameSense

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.EdgeStart))
		parameters.push(BaseIfc.toStepValue(this.EdgeEnd))
		parameters.push(BaseIfc.toStepValue(this.EdgeGeometry))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

        return parameters.join()
    }
}