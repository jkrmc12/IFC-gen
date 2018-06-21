
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm
 */
module.exports = class IfcAsymmetricIShapeProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, bottomFlangeWidth, overallDepth, webThickness, bottomFlangeThickness, topFlangeWidth) {
        super(profileType)
		this.BottomFlangeWidth = bottomFlangeWidth
		this.OverallDepth = overallDepth
		this.WebThickness = webThickness
		this.BottomFlangeThickness = bottomFlangeThickness
		this.TopFlangeWidth = topFlangeWidth

        	this.BottomFlangeFilletRadius = null  // optional
	this.TopFlangeThickness = null  // optional
	this.TopFlangeFilletRadius = null  // optional
	this.BottomFlangeEdgeRadius = null  // optional
	this.BottomFlangeSlope = null  // optional
	this.TopFlangeEdgeRadius = null  // optional
	this.TopFlangeSlope = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.OverallDepth))
		parameters.push(BaseIfc.toStepValue(this.WebThickness))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeFilletRadius))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeFilletRadius))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeEdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeSlope))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeEdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeSlope))

        return parameters.join()
    }
}