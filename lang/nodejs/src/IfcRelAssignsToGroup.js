
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcGroup = require('./IfcGroup')
const IfcRelAssigns = require('./IfcRelAssigns')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroup.htm
 */
module.exports = class IfcRelAssignsToGroup extends IfcRelAssigns {
  
    constructor(globalId, relatedObjects, relatingGroup) {
        super(globalId,relatedObjects)
		this.RelatingGroup = relatingGroup

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingGroup))

        return parameters.join()
    }
}