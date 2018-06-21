
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
const IfcRelSequence = require('./IfcRelSequence')
const IfcRelAssignsToProcess = require('./IfcRelAssignsToProcess')
const IfcBoolean = require('./IfcBoolean')
const IfcInteger = require('./IfcInteger')
const IfcTaskTime = require('./IfcTaskTime')
const IfcTaskTypeEnum = require('./IfcTaskTypeEnum')
const IfcProcess = require('./IfcProcess')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm
 */
module.exports = class IfcTask extends IfcProcess {
  
    constructor(globalId, isMilestone) {
        super(globalId)
		this.IsMilestone = isMilestone

        	this.Status = null  // optional
	this.WorkMethod = null  // optional
	this.Priority = null  // optional
	this.TaskTime = null  // optional
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
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.WorkMethod))
		parameters.push(BaseIfc.toStepValue(this.IsMilestone))
		parameters.push(BaseIfc.toStepValue(this.Priority))
		parameters.push(BaseIfc.toStepValue(this.TaskTime))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join()
    }
}