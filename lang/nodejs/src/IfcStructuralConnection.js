
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
const IfcRelConnectsStructuralActivity = require('./IfcRelConnectsStructuralActivity')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')
const IfcRelConnectsStructuralMember = require('./IfcRelConnectsStructuralMember')
const IfcStructuralItem = require('./IfcStructuralItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
 */
module.exports = class IfcStructuralConnection extends IfcStructuralItem {
  
    constructor(globalId) {
        super(globalId)
        	this.AppliedCondition = null  // optional
	this.ConnectsStructuralMembers = null  // inverse

    }
}