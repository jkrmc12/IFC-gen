
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcStructuralMember = require('./IfcStructuralMember')
const IfcStructuralConnection = require('./IfcStructuralConnection')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')
const IfcStructuralConnectionCondition = require('./IfcStructuralConnectionCondition')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcRelConnectsStructuralMember = require('./IfcRelConnectsStructuralMember')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswitheccentricity.htm
 */
module.exports = class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember {
  
    constructor(globalId, relatingStructuralMember, relatedStructuralConnection, connectionConstraint) {
        super(globalId,relatingStructuralMember,relatedStructuralConnection)
		this.ConnectionConstraint = connectionConstraint

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingStructuralMember))
		parameters.push(BaseIfc.toStepValue(this.RelatedStructuralConnection))
		parameters.push(BaseIfc.toStepValue(this.AppliedCondition))
		parameters.push(BaseIfc.toStepValue(this.AdditionalConditions))
		parameters.push(BaseIfc.toStepValue(this.SupportedLength))
		parameters.push(BaseIfc.toStepValue(this.ConditionCoordinateSystem))
		parameters.push(BaseIfc.toStepValue(this.ConnectionConstraint))

        return parameters.join()
    }
}