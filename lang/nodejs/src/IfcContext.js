
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
const IfcRepresentationContext = require('./IfcRepresentationContext')
const IfcUnitAssignment = require('./IfcUnitAssignment')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcObjectDefinition = require('./IfcObjectDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontext.htm
 */
module.exports = class IfcContext extends IfcObjectDefinition {
  
    constructor(globalId) {
        super(globalId)
        	this.ObjectType = null  // optional
	this.LongName = null  // optional
	this.Phase = null  // optional
	this.RepresentationContexts = null  // optional
	this.UnitsInContext = null  // optional
	this.IsDefinedBy = null  // inverse
	this.Declares = null  // inverse

    }
}