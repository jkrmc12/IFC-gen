
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
 */
module.exports = class IfcProfileDef extends BaseIfc {
  
    constructor(profileType) {
        super()
		this.ProfileType = profileType

        	this.ProfileName = null  // optional
	this.HasExternalReference = null  // inverse
	this.HasProperties = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))

        return parameters.join()
    }
}