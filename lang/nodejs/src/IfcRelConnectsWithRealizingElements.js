
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcElement = require('./IfcElement')
const IfcRelConnectsElements = require('./IfcRelConnectsElements')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswithrealizingelements.htm
 */
module.exports = class IfcRelConnectsWithRealizingElements extends IfcRelConnectsElements {
  
    constructor(globalId, relatingElement, relatedElement, realizingElements) {
        super(globalId,relatingElement,relatedElement)
		this.RealizingElements = realizingElements

        	this.ConnectionType = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.RealizingElements))
		parameters.push(BaseIfc.toStepValue(this.ConnectionType))

        return parameters.join()
    }
}