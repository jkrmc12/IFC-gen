
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccshapeprofiledef.htm
 */
module.exports = class IfcCShapeProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, depth, width, wallThickness, girth) {
        super(profileType)
		this.Depth = depth
		this.Width = width
		this.WallThickness = wallThickness
		this.Girth = girth

        	this.InternalFilletRadius = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.Width))
		parameters.push(BaseIfc.toStepValue(this.WallThickness))
		parameters.push(BaseIfc.toStepValue(this.Girth))
		parameters.push(BaseIfc.toStepValue(this.InternalFilletRadius))

        return parameters.join()
    }
}