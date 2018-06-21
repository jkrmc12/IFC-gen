
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
const IfcDateTime = require('./IfcDateTime')
const IfcPerson = require('./IfcPerson')
const IfcDuration = require('./IfcDuration')
const IfcWorkPlanTypeEnum = require('./IfcWorkPlanTypeEnum')
const IfcWorkControl = require('./IfcWorkControl')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkplan.htm
 */
module.exports = class IfcWorkPlan extends IfcWorkControl {
  
    constructor(globalId, creationDate, startTime) {
        super(globalId,creationDate,startTime)
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
		parameters.push(BaseIfc.toStepValue(this.CreationDate))
		parameters.push(BaseIfc.toStepValue(this.Creators))
		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.Duration))
		parameters.push(BaseIfc.toStepValue(this.TotalFloat))
		parameters.push(BaseIfc.toStepValue(this.StartTime))
		parameters.push(BaseIfc.toStepValue(this.FinishTime))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join()
    }
}