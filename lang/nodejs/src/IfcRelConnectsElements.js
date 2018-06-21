
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcElement = require('./IfcElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm
 */
module.exports = class IfcRelConnectsElements extends IfcRelConnects {
  
    constructor(globalId, relatingElement, relatedElement) {
        super(globalId)
		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement

        	this.ConnectionGeometry = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ConnectionGeometry))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedElement))

        return parameters.join()
    }
}