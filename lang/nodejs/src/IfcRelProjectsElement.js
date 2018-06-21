
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcElement = require('./IfcElement')
const IfcFeatureElementAddition = require('./IfcFeatureElementAddition')
const IfcRelDecomposes = require('./IfcRelDecomposes')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
 */
module.exports = class IfcRelProjectsElement extends IfcRelDecomposes {
  
    constructor(globalId, relatingElement, relatedFeatureElement) {
        super(globalId)
		this.RelatingElement = relatingElement
		this.RelatedFeatureElement = relatedFeatureElement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingElement))
		parameters.push(BaseIfc.toStepValue(this.RelatedFeatureElement))

        return parameters.join()
    }
}