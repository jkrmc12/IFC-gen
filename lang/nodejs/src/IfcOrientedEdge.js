
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVertex = require('./IfcVertex')
const IfcEdge = require('./IfcEdge')
const IfcBoolean = require('./IfcBoolean')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm
 */
module.exports = class IfcOrientedEdge extends IfcEdge {
  
    constructor(edgeStart, edgeEnd, edgeElement, orientation) {
        super(edgeStart,edgeEnd)
		this.EdgeElement = edgeElement
		this.Orientation = orientation

        
    Object.defineProperty(this, 'EdgeStart', {
        get: () => {throw "Derived property logic has not been implemented for EdgeStart."}, // derived
        set: (value) => {this.EdgeStart = value}
    })

    Object.defineProperty(this, 'EdgeEnd', {
        get: () => {throw "Derived property logic has not been implemented for EdgeEnd."}, // derived
        set: (value) => {this.EdgeEnd = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push("*");
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.EdgeElement))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join()
    }
}