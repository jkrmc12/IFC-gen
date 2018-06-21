
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCurveStyle = require('./IfcCurveStyle')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcVector = require('./IfcVector')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm
 */
module.exports = class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem {
  
    constructor(hatchLineAppearance, startOfNextHatchLine, hatchLineAngle) {
        super()
		this.HatchLineAppearance = hatchLineAppearance
		this.StartOfNextHatchLine = startOfNextHatchLine
		this.HatchLineAngle = hatchLineAngle

        	this.PointOfReferenceHatchLine = null  // optional
	this.PatternStart = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.HatchLineAppearance))
		parameters.push(BaseIfc.toStepValue(this.StartOfNextHatchLine))
		parameters.push(BaseIfc.toStepValue(this.PointOfReferenceHatchLine))
		parameters.push(BaseIfc.toStepValue(this.PatternStart))
		parameters.push(BaseIfc.toStepValue(this.HatchLineAngle))

        return parameters.join()
    }
}