
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcProfileDef = require('./IfcProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm
 */
module.exports = class IfcCompositeProfileDef extends IfcProfileDef {
  
    constructor(profileType, profiles) {
        super(profileType)
		this.Profiles = profiles

        	this.Label = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Profiles))
		parameters.push(BaseIfc.toStepValue(this.Label))

        return parameters.join()
    }
}