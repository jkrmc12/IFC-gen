
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcNonNegativeLengthMeasure = require('./IfcNonNegativeLengthMeasure')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcParameterizedProfileDef = require('./IfcParameterizedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcishapeprofiledef.htm
 */
module.exports = class IfcIShapeProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, overallWidth, overallDepth, webThickness, flangeThickness) {
        super(profileType)
		this.OverallWidth = overallWidth
		this.OverallDepth = overallDepth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

        	this.FilletRadius = null  // optional
	this.FlangeEdgeRadius = null  // optional
	this.FlangeSlope = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.OverallWidth))
		parameters.push(BaseIfc.toStepValue(this.OverallDepth))
		parameters.push(BaseIfc.toStepValue(this.WebThickness))
		parameters.push(BaseIfc.toStepValue(this.FlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.FilletRadius))
		parameters.push(BaseIfc.toStepValue(this.FlangeEdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.FlangeSlope))

        return parameters.join()
    }
}