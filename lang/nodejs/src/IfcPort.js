
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
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcRelConnectsPortToElement = require('./IfcRelConnectsPortToElement')
const IfcRelConnectsPorts = require('./IfcRelConnectsPorts')
const IfcProduct = require('./IfcProduct')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcport.htm
 */
module.exports = class IfcPort extends IfcProduct {
  
    constructor(globalId) {
        super(globalId)
        	this.ContainedIn = null  // inverse
	this.ConnectedFrom = null  // inverse
	this.ConnectedTo = null  // inverse

    }
}