
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcElement = require('./IfcElement')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinterfereselements.htm
 */
module.exports = class IfcRelInterferesElements extends IfcRelConnects {
  
    constructor(globalId, relatingElement, relatedElement, impliedOrder) {
        super(globalId)
		this.RelatingElement = relatingElement
		this.RelatedElement = relatedElement
		this.ImpliedOrder = impliedOrder

        	this.InterferenceGeometry = null  // optional
	this.InterferenceType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedElement))
		parameters.push(BaseIfc.toStepValue(this.InterferenceGeometry))
		parameters.push(BaseIfc.toStepValue(this.InterferenceType))
		parameters.push(BaseIfc.toStepValue(this.ImpliedOrder))

        return parameters.join()
    }
}