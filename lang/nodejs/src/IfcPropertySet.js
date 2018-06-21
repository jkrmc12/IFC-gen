
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcTypeObject = require('./IfcTypeObject')
const IfcRelDefinesByTemplate = require('./IfcRelDefinesByTemplate')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcProperty = require('./IfcProperty')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm
 */
module.exports = class IfcPropertySet extends IfcPropertySetDefinition {
  
    constructor(globalId, hasProperties) {
        super(globalId)
		this.HasProperties = hasProperties

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.HasProperties))

        return parameters.join()
    }
}