
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcPropertySetTemplate = require('./IfcPropertySetTemplate')
const IfcRelDefines = require('./IfcRelDefines')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytemplate.htm
 */
module.exports = class IfcRelDefinesByTemplate extends IfcRelDefines {
  
    constructor(globalId, relatedPropertySets, relatingTemplate) {
        super(globalId)
		this.RelatedPropertySets = relatedPropertySets
		this.RelatingTemplate = relatingTemplate

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedPropertySets))
		parameters.push(BaseIfc.toStepValue(this.RelatingTemplate))

        return parameters.join()
    }
}