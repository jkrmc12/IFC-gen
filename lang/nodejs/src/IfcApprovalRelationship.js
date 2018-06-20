
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcApproval = require('./IfcApproval')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalrelationship.htm
 */
module.exports = class IfcApprovalRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingApproval, relatedApprovals) {
        super()
		this.RelatingApproval = relatingApproval
		this.RelatedApprovals = relatedApprovals

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingApproval))
		parameters.push(BaseIfc.toStepValue(this.RelatedApprovals))

        return parameters.join()
    }
}