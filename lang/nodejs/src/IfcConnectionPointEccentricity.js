
const BaseIfc = require('./BaseIfc')
const IfcPoint = require('./IfcPoint')
const IfcVertexPoint = require('./IfcVertexPoint')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcConnectionPointGeometry = require('./IfcConnectionPointGeometry')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm
 */
module.exports = class IfcConnectionPointEccentricity extends IfcConnectionPointGeometry {
  
    constructor(pointOnRelatingElement) {
        super(pointOnRelatingElement)
        	this.EccentricityInX = null  // optional
	this.EccentricityInY = null  // optional
	this.EccentricityInZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.PointOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.PointOnRelatedElement))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInX))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInY))
		parameters.push(BaseIfc.toStepValue(this.EccentricityInZ))

        return parameters.join()
    }
}