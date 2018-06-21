
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDateTime = require('./IfcDateTime')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcRelAssociatesApproval = require('./IfcRelAssociatesApproval')
const IfcResourceApprovalRelationship = require('./IfcResourceApprovalRelationship')
const IfcApprovalRelationship = require('./IfcApprovalRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapproval.htm
 */
module.exports = class IfcApproval extends BaseIfc {
  
    constructor() {
        super()
        	this.Identifier = null  // optional
	this.Name = null  // optional
	this.Description = null  // optional
	this.TimeOfApproval = null  // optional
	this.Status = null  // optional
	this.Level = null  // optional
	this.Qualifier = null  // optional
	this.RequestingApproval = null  // optional
	this.GivingApproval = null  // optional
	this.HasExternalReferences = null  // inverse
	this.ApprovedObjects = null  // inverse
	this.ApprovedResources = null  // inverse
	this.IsRelatedWith = null  // inverse
	this.Relates = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Identifier))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TimeOfApproval))
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.Level))
		parameters.push(BaseIfc.toStepValue(this.Qualifier))
		parameters.push(BaseIfc.toStepValue(this.RequestingApproval))
		parameters.push(BaseIfc.toStepValue(this.GivingApproval))

        return parameters.join()
    }
}