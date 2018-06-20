
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcElement = require('./IfcElement')
const IfcInteger = require('./IfcInteger')
const IfcConnectionTypeEnum = require('./IfcConnectionTypeEnum')
const IfcRelConnectsElements = require('./IfcRelConnectsElements')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm
 */
module.exports = class IfcRelConnectsPathElements extends IfcRelConnectsElements {
  
    constructor(globalId, relatingElement, relatedElement, relatingPriorities, relatedPriorities, relatedConnectionType, relatingConnectionType) {
        super(globalId,relatingElement,relatedElement)
		this.RelatingPriorities = relatingPriorities
		this.RelatedPriorities = relatedPriorities
		this.RelatedConnectionType = relatedConnectionType
		this.RelatingConnectionType = relatingConnectionType

        
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
		parameters.push(BaseIfc.toStepValue(this.RelatingPriorities))
		parameters.push(BaseIfc.toStepValue(this.RelatedPriorities))
		parameters.push(BaseIfc.toStepValue(this.RelatedConnectionType))
		parameters.push(BaseIfc.toStepValue(this.RelatingConnectionType))

        return parameters.join()
    }
}