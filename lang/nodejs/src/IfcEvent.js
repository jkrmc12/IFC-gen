
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
const IfcEventTypeEnum = require('./IfcEventTypeEnum')
const IfcEventTriggerTypeEnum = require('./IfcEventTriggerTypeEnum')
const IfcEventTime = require('./IfcEventTime')
const IfcProcess = require('./IfcProcess')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevent.htm
 */
module.exports = class IfcEvent extends IfcProcess {
  
    constructor(globalId) {
        super(globalId)
        	this.PredefinedType = null  // optional
	this.EventTriggerType = null  // optional
	this.UserDefinedEventTriggerType = null  // optional
	this.EventOccurenceTime = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.EventTriggerType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedEventTriggerType))
		parameters.push(BaseIfc.toStepValue(this.EventOccurenceTime))

        return parameters.join()
    }
}