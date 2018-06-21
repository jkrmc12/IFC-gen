
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcLibraryInformation = require('./IfcLibraryInformation')
const IfcLibraryReference = require('./IfcLibraryReference')
const IfcRelAssociates = require('./IfcRelAssociates')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm
 */
module.exports = class IfcRelAssociatesLibrary extends IfcRelAssociates {
  
    constructor(globalId, relatedObjects, relatingLibrary) {
        super(globalId,relatedObjects)
		this.RelatingLibrary = relatingLibrary

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingLibrary))

        return parameters.join()
    }
}