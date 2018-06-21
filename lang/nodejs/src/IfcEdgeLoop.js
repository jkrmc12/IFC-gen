
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcOrientedEdge = require('./IfcOrientedEdge')
const IfcInteger = require('./IfcInteger')
const IfcLoop = require('./IfcLoop')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgeloop.htm
 */
module.exports = class IfcEdgeLoop extends IfcLoop {
  
    constructor(edgeList) {
        super()
		this.EdgeList = edgeList

        
    Object.defineProperty(this, 'Ne', {
        get: () => {throw "Derived property logic has not been implemented for Ne."}, // derived
        set: (value) => {this.Ne = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.EdgeList))

        return parameters.join()
    }
}