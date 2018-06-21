
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcNonNegativeLengthMeasure = require('./IfcNonNegativeLengthMeasure')
const IfcRectangleProfileDef = require('./IfcRectangleProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm
 */
module.exports = class IfcRectangleHollowProfileDef extends IfcRectangleProfileDef {
  
    constructor(profileType, xDim, yDim, wallThickness) {
        super(profileType,xDim,yDim)
		this.WallThickness = wallThickness

        	this.InnerFilletRadius = null  // optional
	this.OuterFilletRadius = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.XDim))
		parameters.push(BaseIfc.toStepValue(this.YDim))
		parameters.push(BaseIfc.toStepValue(this.WallThickness))
		parameters.push(BaseIfc.toStepValue(this.InnerFilletRadius))
		parameters.push(BaseIfc.toStepValue(this.OuterFilletRadius))

        return parameters.join()
    }
}