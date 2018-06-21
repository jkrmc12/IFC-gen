
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcProfileDef = require('./IfcProfileDef')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')
const IfcDerivedProfileDef = require('./IfcDerivedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmirroredprofiledef.htm
 */
module.exports = class IfcMirroredProfileDef extends IfcDerivedProfileDef {
  
    constructor(profileType, parentProfile, op) {
        super(profileType,parentProfile,op)
        
    Object.defineProperty(this, 'Operator', {
        get: () => {throw "Derived property logic has not been implemented for Operator."}, // derived
        set: (value) => {this.Operator = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.ParentProfile))
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.Label))

        return parameters.join()
    }
}