
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcCurve = require('./IfcCurve')
const IfcProfileDef = require('./IfcProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm
 */
module.exports = class IfcArbitraryClosedProfileDef extends IfcProfileDef {
  
    constructor(profileType, outerCurve) {
        super(profileType)
		this.OuterCurve = outerCurve

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.OuterCurve))

        return parameters.join()
    }
}