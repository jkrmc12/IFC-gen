
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcElement = require('./IfcElement')
const IfcStructuralItem = require('./IfcStructuralItem')
const IfcStructuralActivity = require('./IfcStructuralActivity')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
 */
module.exports = class IfcRelConnectsStructuralActivity extends IfcRelConnects {
  
    constructor(globalId, relatingElement, relatedStructuralActivity) {
        super(globalId)
		this.RelatingElement = relatingElement
		this.RelatedStructuralActivity = relatedStructuralActivity

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedStructuralActivity))

        return parameters.join()
    }
}