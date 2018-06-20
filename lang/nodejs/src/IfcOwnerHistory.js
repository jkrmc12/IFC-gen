
const BaseIfc = require('./BaseIfc')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcApplication = require('./IfcApplication')
const IfcStateEnum = require('./IfcStateEnum')
const IfcChangeActionEnum = require('./IfcChangeActionEnum')
const IfcTimeStamp = require('./IfcTimeStamp')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm
 */
module.exports = class IfcOwnerHistory extends BaseIfc {
  
    constructor(owningUser, owningApplication, creationDate) {
        super()
		this.OwningUser = owningUser
		this.OwningApplication = owningApplication
		this.CreationDate = creationDate

        	this.State = null  // optional
	this.ChangeAction = null  // optional
	this.LastModifiedDate = null  // optional
	this.LastModifyingUser = null  // optional
	this.LastModifyingApplication = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.OwningUser))
		parameters.push(BaseIfc.toStepValue(this.OwningApplication))
		parameters.push(BaseIfc.toStepValue(this.State))
		parameters.push(BaseIfc.toStepValue(this.ChangeAction))
		parameters.push(BaseIfc.toStepValue(this.LastModifiedDate))
		parameters.push(BaseIfc.toStepValue(this.LastModifyingUser))
		parameters.push(BaseIfc.toStepValue(this.LastModifyingApplication))
		parameters.push(BaseIfc.toStepValue(this.CreationDate))

        return parameters.join()
    }
}