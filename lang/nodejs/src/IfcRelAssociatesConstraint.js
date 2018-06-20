
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcConstraint = require('./IfcConstraint')
const IfcRelAssociates = require('./IfcRelAssociates')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm
 */
module.exports = class IfcRelAssociatesConstraint extends IfcRelAssociates {
  
    constructor(globalId, relatedObjects, relatingConstraint) {
        super(globalId,relatedObjects)
		this.RelatingConstraint = relatingConstraint

        	this.Intent = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.Intent))
		parameters.push(BaseIfc.toStepValue(this.RelatingConstraint))

        return parameters.join()
    }
}