
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcProfileDef = require('./IfcProfileDef')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedprofiledef.htm
 */
module.exports = class IfcDerivedProfileDef extends IfcProfileDef {
  
    constructor(profileType, parentProfile, op) {
        super(profileType)
		this.ParentProfile = parentProfile
		this.Operator = op

        	this.Label = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.ParentProfile))
		parameters.push(BaseIfc.toStepValue(this.Operator))
		parameters.push(BaseIfc.toStepValue(this.Label))

        return parameters.join()
    }
}