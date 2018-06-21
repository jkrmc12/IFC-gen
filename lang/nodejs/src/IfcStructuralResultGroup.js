
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
const IfcAnalysisTheoryTypeEnum = require('./IfcAnalysisTheoryTypeEnum')
const IfcStructuralLoadGroup = require('./IfcStructuralLoadGroup')
const IfcBoolean = require('./IfcBoolean')
const IfcStructuralAnalysisModel = require('./IfcStructuralAnalysisModel')
const IfcGroup = require('./IfcGroup')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm
 */
module.exports = class IfcStructuralResultGroup extends IfcGroup {
  
    constructor(globalId, theoryType, isLinear) {
        super(globalId)
		this.TheoryType = theoryType
		this.IsLinear = isLinear

        	this.ResultForLoadGroup = null  // optional
	this.ResultGroupFor = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.TheoryType))
		parameters.push(BaseIfc.toStepValue(this.ResultForLoadGroup))
		parameters.push(BaseIfc.toStepValue(this.IsLinear))

        return parameters.join()
    }
}