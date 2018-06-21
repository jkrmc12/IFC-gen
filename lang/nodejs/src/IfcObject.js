
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
const IfcObjectDefinition = require('./IfcObjectDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobject.htm
 */
module.exports = class IfcObject extends IfcObjectDefinition {
  
    constructor(globalId) {
        super(globalId)
        	this.ObjectType = null  // optional
	this.IsDeclaredBy = null  // inverse
	this.Declares = null  // inverse
	this.IsTypedBy = null  // inverse
	this.IsDefinedBy = null  // inverse

    }
}