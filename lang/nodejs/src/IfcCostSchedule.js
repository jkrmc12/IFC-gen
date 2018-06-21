
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
const IfcCostScheduleTypeEnum = require('./IfcCostScheduleTypeEnum')
const IfcDateTime = require('./IfcDateTime')
const IfcControl = require('./IfcControl')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostschedule.htm
 */
module.exports = class IfcCostSchedule extends IfcControl {
  
    constructor(globalId) {
        super(globalId)
        	this.PredefinedType = null  // optional
	this.Status = null  // optional
	this.SubmittedOn = null  // optional
	this.UpdateDate = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.SubmittedOn))
		parameters.push(BaseIfc.toStepValue(this.UpdateDate))

        return parameters.join()
    }
}