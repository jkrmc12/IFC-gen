
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcProduct = require('./IfcProduct')
const IfcTypeProduct = require('./IfcTypeProduct')
const IfcRelAssigns = require('./IfcRelAssigns')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm
 */
module.exports = class IfcRelAssignsToProduct extends IfcRelAssigns {
  
    constructor(globalId, relatedObjects, relatingProduct) {
        super(globalId,relatedObjects)
		this.RelatingProduct = relatingProduct

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingProduct))

        return parameters.join()
    }
}