
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
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcStructuralLoad = require('./IfcStructuralLoad')
const IfcGlobalOrLocalEnum = require('./IfcGlobalOrLocalEnum')
const IfcRelConnectsStructuralActivity = require('./IfcRelConnectsStructuralActivity')
const IfcBoolean = require('./IfcBoolean')
const IfcProjectedOrTrueLengthEnum = require('./IfcProjectedOrTrueLengthEnum')
const IfcStructuralCurveActivityTypeEnum = require('./IfcStructuralCurveActivityTypeEnum')
const IfcStructuralAction = require('./IfcStructuralAction')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurveaction.htm
 */
module.exports = class IfcStructuralCurveAction extends IfcStructuralAction {
  
    constructor(globalId, appliedLoad, globalOrLocal, predefinedType) {
        super(globalId,appliedLoad,globalOrLocal)
		this.PredefinedType = predefinedType

        	this.ProjectedOrTrue = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.ObjectPlacement))
		parameters.push(BaseIfc.toStepValue(this.Representation))
		parameters.push(BaseIfc.toStepValue(this.AppliedLoad))
		parameters.push(BaseIfc.toStepValue(this.GlobalOrLocal))
		parameters.push(BaseIfc.toStepValue(this.DestabilizingLoad))
		parameters.push(BaseIfc.toStepValue(this.ProjectedOrTrue))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join()
    }
}