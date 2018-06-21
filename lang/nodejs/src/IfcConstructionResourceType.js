
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
const IfcRelAssignsToResource = require('./IfcRelAssignsToResource')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcTypeResource = require('./IfcTypeResource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresourcetype.htm
 */
module.exports = class IfcConstructionResourceType extends IfcTypeResource {
  
    constructor(globalId) {
        super(globalId)
        	this.BaseCosts = null  // optional
	this.BaseQuantity = null  // optional

    }
}