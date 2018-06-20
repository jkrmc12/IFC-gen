
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcPropertySetDefinitionSet = require('./IfcPropertySetDefinitionSet')
const IfcRelDefines = require('./IfcRelDefines')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm
 */
module.exports = class IfcRelDefinesByProperties extends IfcRelDefines {
  
    constructor(globalId, relatedObjects, relatingPropertyDefinition) {
        super(globalId)
		this.RelatedObjects = relatedObjects
		this.RelatingPropertyDefinition = relatingPropertyDefinition

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingPropertyDefinition))

        return parameters.join()
    }
}