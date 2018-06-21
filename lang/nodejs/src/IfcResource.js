
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
const IfcObject = require('./IfcObject')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresource.htm
 */
module.exports = class IfcResource extends IfcObject {
  
    constructor(globalId) {
        super(globalId)
        	this.Identification = null  // optional
	this.LongDescription = null  // optional
	this.ResourceOf = null  // inverse

    }
}