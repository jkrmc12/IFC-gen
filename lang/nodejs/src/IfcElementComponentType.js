
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelAssigns = require('./IfcRelAssigns')
const IfcRelNests = require('./IfcRelNests')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAggregates = require('./IfcRelAggregates')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcIdentifier = require('./IfcIdentifier')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcElementType = require('./IfcElementType')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponenttype.htm
 */
module.exports = class IfcElementComponentType extends IfcElementType {
  
    constructor(globalId) {
        super(globalId)
        
    }
}