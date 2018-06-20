
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcOpeningElement = require('./IfcOpeningElement')
const IfcElement = require('./IfcElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm
 */
module.exports = class IfcRelFillsElement extends IfcRelConnects {
  
    constructor(globalId, relatingOpeningElement, relatedBuildingElement) {
        super(globalId)
		this.RelatingOpeningElement = relatingOpeningElement
		this.RelatedBuildingElement = relatedBuildingElement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingOpeningElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildingElement))

        return parameters.join()
    }
}