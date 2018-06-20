
const BaseIfc = require('./BaseIfc')
const IfcPerson = require('./IfcPerson')
const IfcOrganization = require('./IfcOrganization')
const IfcActorRole = require('./IfcActorRole')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
 */
module.exports = class IfcPersonAndOrganization extends BaseIfc {
  
    constructor(thePerson, theOrganization) {
        super()
		this.ThePerson = thePerson
		this.TheOrganization = theOrganization

        	this.Roles = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ThePerson))
		parameters.push(BaseIfc.toStepValue(this.TheOrganization))
		parameters.push(BaseIfc.toStepValue(this.Roles))

        return parameters.join()
    }
}