
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
const IfcRelDefinesByObject = require('./IfcRelDefinesByObject')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelAssignsToResource = require('./IfcRelAssignsToResource')
const IfcResourceTime = require('./IfcResourceTime')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcResource = require('./IfcResource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresource.htm
 */
module.exports = class IfcConstructionResource extends IfcResource {
  
    constructor(globalId) {
        super(globalId)
        	this.Usage = null  // optional
	this.BaseCosts = null  // optional
	this.BaseQuantity = null  // optional

    }
}