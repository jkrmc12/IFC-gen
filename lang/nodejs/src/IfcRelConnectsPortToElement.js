
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcPort = require('./IfcPort')
const IfcDistributionElement = require('./IfcDistributionElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm
 */
module.exports = class IfcRelConnectsPortToElement extends IfcRelConnects {
  
    constructor(globalId, relatingPort, relatedElement) {
        super(globalId)
		this.RelatingPort = relatingPort
		this.RelatedElement = relatedElement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingPort))
		parameters.push(BaseIfc.toStepValue(this.RelatedElement))

        return parameters.join()
    }
}