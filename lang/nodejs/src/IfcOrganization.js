
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcActorRole = require('./IfcActorRole')
const IfcAddress = require('./IfcAddress')
const IfcOrganizationRelationship = require('./IfcOrganizationRelationship')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm
 */
module.exports = class IfcOrganization extends BaseIfc {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Identification = null  // optional
	this.Description = null  // optional
	this.Roles = null  // optional
	this.Addresses = null  // optional
	this.IsRelatedBy = null  // inverse
	this.Relates = null  // inverse
	this.Engages = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Roles))
		parameters.push(BaseIfc.toStepValue(this.Addresses))

        return parameters.join()
    }
}