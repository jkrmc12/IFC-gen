
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcGroup = require('./IfcGroup')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcRelAssignsToGroup = require('./IfcRelAssignsToGroup')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroupbyfactor.htm
 */
module.exports = class IfcRelAssignsToGroupByFactor extends IfcRelAssignsToGroup {
  
    constructor(globalId, relatedObjects, relatingGroup, factor) {
        super(globalId,relatedObjects,relatingGroup)
		this.Factor = factor

        
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
		parameters.push(BaseIfc.toStepValue(this.Factor))

        return parameters.join()
    }
}