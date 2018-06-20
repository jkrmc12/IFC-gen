
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcActorRole = require('./IfcActorRole')
const IfcAddress = require('./IfcAddress')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm
 */
module.exports = class IfcPerson extends BaseIfc {
  
    constructor() {
        super()
        	this.Identification = null  // optional
	this.FamilyName = null  // optional
	this.GivenName = null  // optional
	this.MiddleNames = null  // optional
	this.PrefixTitles = null  // optional
	this.SuffixTitles = null  // optional
	this.Roles = null  // optional
	this.Addresses = null  // optional
	this.EngagedIn = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.FamilyName))
		parameters.push(BaseIfc.toStepValue(this.GivenName))
		parameters.push(BaseIfc.toStepValue(this.MiddleNames))
		parameters.push(BaseIfc.toStepValue(this.PrefixTitles))
		parameters.push(BaseIfc.toStepValue(this.SuffixTitles))
		parameters.push(BaseIfc.toStepValue(this.Roles))
		parameters.push(BaseIfc.toStepValue(this.Addresses))

        return parameters.join()
    }
}