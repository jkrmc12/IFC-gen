
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcRelDecomposes = require('./IfcRelDecomposes')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelnests.htm
 */
module.exports = class IfcRelNests extends IfcRelDecomposes {
  
    constructor(globalId, relatingObject, relatedObjects) {
        super(globalId)
		this.RelatingObject = relatingObject
		this.RelatedObjects = relatedObjects

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingObject))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))

        return parameters.join()
    }
}