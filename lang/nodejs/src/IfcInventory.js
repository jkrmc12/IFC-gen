
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
const IfcRelAssignsToGroup = require('./IfcRelAssignsToGroup')
const IfcInventoryTypeEnum = require('./IfcInventoryTypeEnum')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcDate = require('./IfcDate')
const IfcCostValue = require('./IfcCostValue')
const IfcGroup = require('./IfcGroup')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinventory.htm
 */
module.exports = class IfcInventory extends IfcGroup {
  
    constructor(globalId) {
        super(globalId)
        	this.PredefinedType = null  // optional
	this.Jurisdiction = null  // optional
	this.ResponsiblePersons = null  // optional
	this.LastUpdateDate = null  // optional
	this.CurrentValue = null  // optional
	this.OriginalValue = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.Jurisdiction))
		parameters.push(BaseIfc.toStepValue(this.ResponsiblePersons))
		parameters.push(BaseIfc.toStepValue(this.LastUpdateDate))
		parameters.push(BaseIfc.toStepValue(this.CurrentValue))
		parameters.push(BaseIfc.toStepValue(this.OriginalValue))

        return parameters.join()
    }
}