
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcElement = require('./IfcElement')
const IfcCovering = require('./IfcCovering')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversbldgelements.htm
 */
module.exports = class IfcRelCoversBldgElements extends IfcRelConnects {
  
    constructor(globalId, relatingBuildingElement, relatedCoverings) {
        super(globalId)
		this.RelatingBuildingElement = relatingBuildingElement
		this.RelatedCoverings = relatedCoverings

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingBuildingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedCoverings))

        return parameters.join()
    }
}