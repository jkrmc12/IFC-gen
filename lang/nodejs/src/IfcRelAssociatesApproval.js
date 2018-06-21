
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcApproval = require('./IfcApproval')
const IfcRelAssociates = require('./IfcRelAssociates')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesapproval.htm
 */
module.exports = class IfcRelAssociatesApproval extends IfcRelAssociates {
  
    constructor(globalId, relatedObjects, relatingApproval) {
        super(globalId,relatedObjects)
		this.RelatingApproval = relatingApproval

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingApproval))

        return parameters.join()
    }
}