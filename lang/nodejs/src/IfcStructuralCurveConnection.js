
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
const IfcRelConnectsStructuralActivity = require('./IfcRelConnectsStructuralActivity')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')
const IfcRelConnectsStructuralMember = require('./IfcRelConnectsStructuralMember')
const IfcDirection = require('./IfcDirection')
const IfcStructuralConnection = require('./IfcStructuralConnection')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurveconnection.htm
 */
module.exports = class IfcStructuralCurveConnection extends IfcStructuralConnection {
  
    constructor(globalId, axis) {
        super(globalId)
		this.Axis = axis

        
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
		parameters.push(BaseIfc.toStepValue(this.AppliedCondition))
		parameters.push(BaseIfc.toStepValue(this.Axis))

        return parameters.join()
    }
}