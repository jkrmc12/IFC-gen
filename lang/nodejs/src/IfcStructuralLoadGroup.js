
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
const IfcLoadGroupTypeEnum = require('./IfcLoadGroupTypeEnum')
const IfcActionTypeEnum = require('./IfcActionTypeEnum')
const IfcActionSourceTypeEnum = require('./IfcActionSourceTypeEnum')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcStructuralResultGroup = require('./IfcStructuralResultGroup')
const IfcStructuralAnalysisModel = require('./IfcStructuralAnalysisModel')
const IfcGroup = require('./IfcGroup')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm
 */
module.exports = class IfcStructuralLoadGroup extends IfcGroup {
  
    constructor(globalId, predefinedType, actionType, actionSource) {
        super(globalId)
		this.PredefinedType = predefinedType
		this.ActionType = actionType
		this.ActionSource = actionSource

        	this.Coefficient = null  // optional
	this.Purpose = null  // optional
	this.SourceOfResultGroup = null  // inverse
	this.LoadGroupFor = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.ActionType))
		parameters.push(BaseIfc.toStepValue(this.ActionSource))
		parameters.push(BaseIfc.toStepValue(this.Coefficient))
		parameters.push(BaseIfc.toStepValue(this.Purpose))

        return parameters.join()
    }
}