
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDistributionControlElement = require('./IfcDistributionControlElement')
const IfcDistributionFlowElement = require('./IfcDistributionFlowElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelflowcontrolelements.htm
 */
module.exports = class IfcRelFlowControlElements extends IfcRelConnects {
  
    constructor(globalId, relatedControlElements, relatingFlowElement) {
        super(globalId)
		this.RelatedControlElements = relatedControlElements
		this.RelatingFlowElement = relatingFlowElement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedControlElements))
		parameters.push(BaseIfc.toStepValue(this.RelatingFlowElement))

        return parameters.join()
    }
}