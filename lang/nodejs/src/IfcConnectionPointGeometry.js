
const BaseIfc = require('./BaseIfc')
const IfcPoint = require('./IfcPoint')
const IfcVertexPoint = require('./IfcVertexPoint')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm
 */
module.exports = class IfcConnectionPointGeometry extends IfcConnectionGeometry {
  
    constructor(pointOnRelatingElement) {
        super()
		this.PointOnRelatingElement = pointOnRelatingElement

        	this.PointOnRelatedElement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.PointOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatedElement))

        return parameters.join()
    }
}