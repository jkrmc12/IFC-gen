
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObject = require('./IfcObject')
const IfcRelDefines = require('./IfcRelDefines')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyobject.htm
 */
module.exports = class IfcRelDefinesByObject extends IfcRelDefines {
  
    constructor(globalId, relatedObjects, relatingObject) {
        super(globalId)
		this.RelatedObjects = relatedObjects
		this.RelatingObject = relatingObject

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingObject))

        return parameters.join()
    }
}