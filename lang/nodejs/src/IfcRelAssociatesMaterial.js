
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')
const IfcMaterialList = require('./IfcMaterialList')
const IfcMaterialUsageDefinition = require('./IfcMaterialUsageDefinition')
const IfcRelAssociates = require('./IfcRelAssociates')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesmaterial.htm
 */
module.exports = class IfcRelAssociatesMaterial extends IfcRelAssociates {
  
    constructor(globalId, relatedObjects, relatingMaterial) {
        super(globalId,relatedObjects)
		this.RelatingMaterial = relatingMaterial

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingMaterial))

        return parameters.join()
    }
}