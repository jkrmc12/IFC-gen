
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcNonNegativeLengthMeasure = require('./IfcNonNegativeLengthMeasure')
const IfcParameterizedProfileDef = require('./IfcParameterizedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifczshapeprofiledef.htm
 */
module.exports = class IfcZShapeProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, depth, flangeWidth, webThickness, flangeThickness) {
        super(profileType)
		this.Depth = depth
		this.FlangeWidth = flangeWidth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

        	this.FilletRadius = null  // optional
	this.EdgeRadius = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.FlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.WebThickness))
		parameters.push(BaseIfc.toStepValue(this.FlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.FilletRadius))
		parameters.push(BaseIfc.toStepValue(this.EdgeRadius))

        return parameters.join()
    }
}