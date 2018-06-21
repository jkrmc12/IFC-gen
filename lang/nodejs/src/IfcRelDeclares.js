
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcContext = require('./IfcContext')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcRelationship = require('./IfcRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldeclares.htm
 */
module.exports = class IfcRelDeclares extends IfcRelationship {
  
    constructor(globalId, relatingContext, relatedDefinitions) {
        super(globalId)
		this.RelatingContext = relatingContext
		this.RelatedDefinitions = relatedDefinitions

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingContext))
		parameters.push(BaseIfc.toStepValue(this.RelatedDefinitions))

        return parameters.join()
    }
}