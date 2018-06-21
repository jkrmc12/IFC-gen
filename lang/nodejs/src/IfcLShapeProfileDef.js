
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm
 */
module.exports = class IfcLShapeProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, depth, thickness) {
        super(profileType)
		this.Depth = depth
		this.Thickness = thickness

        	this.Width = null  // optional
	this.FilletRadius = null  // optional
	this.EdgeRadius = null  // optional
	this.LegSlope = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.Width))
		parameters.push(BaseIfc.toStepValue(this.Thickness))
		parameters.push(BaseIfc.toStepValue(this.FilletRadius))
		parameters.push(BaseIfc.toStepValue(this.EdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.LegSlope))

        return parameters.join()
    }
}