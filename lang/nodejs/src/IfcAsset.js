
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
const IfcIdentifier = require('./IfcIdentifier')
const IfcCostValue = require('./IfcCostValue')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcDate = require('./IfcDate')
const IfcGroup = require('./IfcGroup')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm
 */
module.exports = class IfcAsset extends IfcGroup {
  
    constructor(globalId) {
        super(globalId)
        	this.Identification = null  // optional
	this.OriginalValue = null  // optional
	this.CurrentValue = null  // optional
	this.TotalReplacementCost = null  // optional
	this.Owner = null  // optional
	this.User = null  // optional
	this.ResponsiblePerson = null  // optional
	this.IncorporationDate = null  // optional
	this.DepreciatedValue = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.OriginalValue))
		parameters.push(BaseIfc.toStepValue(this.CurrentValue))
		parameters.push(BaseIfc.toStepValue(this.TotalReplacementCost))
		parameters.push(BaseIfc.toStepValue(this.Owner))
		parameters.push(BaseIfc.toStepValue(this.User))
		parameters.push(BaseIfc.toStepValue(this.ResponsiblePerson))
		parameters.push(BaseIfc.toStepValue(this.IncorporationDate))
		parameters.push(BaseIfc.toStepValue(this.DepreciatedValue))

        return parameters.join()
    }
}