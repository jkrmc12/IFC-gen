
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
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralmember.htm
 */
module.exports = class IfcRelConnectsStructuralMember extends IfcRelConnects {
  
    constructor(globalId, relatingStructuralMember, relatedStructuralConnection) {
        super(globalId)
		this.RelatingStructuralMember = relatingStructuralMember
		this.RelatedStructuralConnection = relatedStructuralConnection

        	this.AppliedCondition = null  // optional
	this.AdditionalConditions = null  // optional
	this.SupportedLength = null  // optional
	this.ConditionCoordinateSystem = null  // optional

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

        return parameters.join()
    }
}