
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelAssigns = require('./IfcRelAssigns')
const IfcRelNests = require('./IfcRelNests')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAggregates = require('./IfcRelAggregates')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcIdentifier = require('./IfcIdentifier')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelAssignsToResource = require('./IfcRelAssignsToResource')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcConstructionMaterialResourceTypeEnum = require('./IfcConstructionMaterialResourceTypeEnum')
const IfcConstructionResourceType = require('./IfcConstructionResourceType')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionmaterialresourcetype.htm
 */
module.exports = class IfcConstructionMaterialResourceType extends IfcConstructionResourceType {
  
    constructor(globalId, predefinedType) {
        super(globalId)
		this.PredefinedType = predefinedType

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.LongDescription))
		parameters.push(BaseIfc.toStepValue(this.ResourceType))
		parameters.push(BaseIfc.toStepValue(this.BaseCosts))
		parameters.push(BaseIfc.toStepValue(this.BaseQuantity))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join()
    }
}