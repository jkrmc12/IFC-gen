
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcParameterizedProfileDef = require('./IfcParameterizedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipseprofiledef.htm
 */
module.exports = class IfcEllipseProfileDef extends IfcParameterizedProfileDef {
  
    constructor(profileType, semiAxis1, semiAxis2) {
        super(profileType)
		this.SemiAxis1 = semiAxis1
		this.SemiAxis2 = semiAxis2

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis1))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis2))

        return parameters.join()
    }
}