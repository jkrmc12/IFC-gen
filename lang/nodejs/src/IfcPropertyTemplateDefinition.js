
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytemplatedefinition.htm
 */
module.exports = class IfcPropertyTemplateDefinition extends IfcPropertyDefinition {
  
    constructor(globalId) {
        super(globalId)
        
    }
}