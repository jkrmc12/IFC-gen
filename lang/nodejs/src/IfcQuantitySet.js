
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
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityset.htm
 */
module.exports = class IfcQuantitySet extends IfcPropertySetDefinition {
  
    constructor(globalId) {
        super(globalId)
        
    }
}