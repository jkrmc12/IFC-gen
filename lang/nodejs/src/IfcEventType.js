
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
const IfcRelAssignsToProcess = require('./IfcRelAssignsToProcess')
const IfcEventTypeEnum = require('./IfcEventTypeEnum')
const IfcEventTriggerTypeEnum = require('./IfcEventTriggerTypeEnum')
const IfcTypeProcess = require('./IfcTypeProcess')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtype.htm
 */
module.exports = class IfcEventType extends IfcTypeProcess {
  
    constructor(globalId, predefinedType, eventTriggerType) {
        super(globalId)
		this.PredefinedType = predefinedType
		this.EventTriggerType = eventTriggerType

        	this.UserDefinedEventTriggerType = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.ProcessType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.EventTriggerType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedEventTriggerType))

        return parameters.join()
    }
}