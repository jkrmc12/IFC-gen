
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcActor = require('./IfcActor')
const IfcActorRole = require('./IfcActorRole')
const IfcRelAssigns = require('./IfcRelAssigns')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm
 */
module.exports = class IfcRelAssignsToActor extends IfcRelAssigns {
  
    constructor(globalId, relatedObjects, relatingActor) {
        super(globalId,relatedObjects)
		this.RelatingActor = relatingActor

        	this.ActingRole = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingActor))
		parameters.push(BaseIfc.toStepValue(this.ActingRole))

        return parameters.join()
    }
}