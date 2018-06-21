
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcParameterizedProfileDef = require('./IfcParameterizedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrapeziumprofiledef.htm
 */
module.exports = class IfcTrapeziumProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, bottomXDim, topXDim, yDim, topXOffset) {
        super(profileType)
		this.BottomXDim = bottomXDim
		this.TopXDim = topXDim
		this.YDim = yDim
		this.TopXOffset = topXOffset

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.BottomXDim))
		parameters.push(BaseIfc.toStepValue(this.TopXDim))
		parameters.push(BaseIfc.toStepValue(this.YDim))
		parameters.push(BaseIfc.toStepValue(this.TopXOffset))

        return parameters.join()
    }
}