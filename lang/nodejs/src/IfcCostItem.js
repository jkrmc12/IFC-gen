
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
const IfcRelAssignsToControl = require('./IfcRelAssignsToControl')
const IfcCostItemTypeEnum = require('./IfcCostItemTypeEnum')
const IfcCostValue = require('./IfcCostValue')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcControl = require('./IfcControl')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostitem.htm
 */
module.exports = class IfcCostItem extends IfcControl {
  
    constructor(globalId) {
        super(globalId)
        	this.PredefinedType = null  // optional
	this.CostValues = null  // optional
	this.CostQuantities = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.CostValues))
		parameters.push(BaseIfc.toStepValue(this.CostQuantities))

        return parameters.join()
    }
}