
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
const IfcRelDefinesByObject = require('./IfcRelDefinesByObject')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelAssignsToResource = require('./IfcRelAssignsToResource')
const IfcResourceTime = require('./IfcResourceTime')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcConstructionProductResourceTypeEnum = require('./IfcConstructionProductResourceTypeEnum')
const IfcConstructionResource = require('./IfcConstructionResource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionproductresource.htm
 */
module.exports = class IfcConstructionProductResource extends IfcConstructionResource {
  
    constructor(globalId) {
        super(globalId)
        	this.PredefinedType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.LongDescription))
		parameters.push(BaseIfc.toStepValue(this.Usage))
		parameters.push(BaseIfc.toStepValue(this.BaseCosts))
		parameters.push(BaseIfc.toStepValue(this.BaseQuantity))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join()
    }
}