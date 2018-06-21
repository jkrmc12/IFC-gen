
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcPoint = require('./IfcPoint')
const IfcVertex = require('./IfcVertex')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
 */
module.exports = class IfcVertexPoint extends IfcVertex {
  
    constructor(vertexGeometry) {
        super()
		this.VertexGeometry = vertexGeometry

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.VertexGeometry))

        return parameters.join()
    }
}