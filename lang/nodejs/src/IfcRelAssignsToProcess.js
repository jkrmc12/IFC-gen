
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcProcess = require('./IfcProcess')
const IfcTypeProcess = require('./IfcTypeProcess')
const IfcMeasureWithUnit = require('./IfcMeasureWithUnit')
const IfcRelAssigns = require('./IfcRelAssigns')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm
 */
module.exports = class IfcRelAssignsToProcess extends IfcRelAssigns {
  
    constructor(globalId, relatedObjects, relatingProcess) {
        super(globalId,relatedObjects)
		this.RelatingProcess = relatingProcess

        	this.QuantityInProcess = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType))
		parameters.push(BaseIfc.toStepValue(this.RelatingProcess))
		parameters.push(BaseIfc.toStepValue(this.QuantityInProcess))

        return parameters.join()
    }
}