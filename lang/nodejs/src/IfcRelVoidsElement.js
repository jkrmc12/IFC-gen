
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcElement = require('./IfcElement')
const IfcFeatureElementSubtraction = require('./IfcFeatureElementSubtraction')
const IfcRelDecomposes = require('./IfcRelDecomposes')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
 */
module.exports = class IfcRelVoidsElement extends IfcRelDecomposes {
  
    constructor(globalId, relatingBuildingElement, relatedOpeningElement) {
        super(globalId)
		this.RelatingBuildingElement = relatingBuildingElement
		this.RelatedOpeningElement = relatedOpeningElement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingBuildingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedOpeningElement))

        return parameters.join()
    }
}