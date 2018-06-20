
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcProduct = require('./IfcProduct')
const IfcSpatialElement = require('./IfcSpatialElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelreferencedinspatialstructure.htm
 */
module.exports = class IfcRelReferencedInSpatialStructure extends IfcRelConnects {
  
    constructor(globalId, relatedElements, relatingStructure) {
        super(globalId)
		this.RelatedElements = relatedElements
		this.RelatingStructure = relatingStructure

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedElements))
		parameters.push(BaseIfc.toStepValue(this.RelatingStructure))

        return parameters.join()
    }
}