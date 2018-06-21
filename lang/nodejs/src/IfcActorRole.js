
const BaseIfc = require('./BaseIfc')
const IfcRoleEnum = require('./IfcRoleEnum')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorrole.htm
 */
module.exports = class IfcActorRole extends BaseIfc {
  
    constructor(role) {
        super()
		this.Role = role

        	this.UserDefinedRole = null  // optional
	this.Description = null  // optional
	this.HasExternalReference = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Role))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedRole))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join()
    }
}