
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
const IfcRoot = require('./IfcRoot')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectdefinition.htm
 */
module.exports = class IfcObjectDefinition extends IfcRoot {
  
    constructor(globalId) {
        super(globalId)
        	this.HasAssignments = null  // inverse
	this.Nests = null  // inverse
	this.IsNestedBy = null  // inverse
	this.HasContext = null  // inverse
	this.IsDecomposedBy = null  // inverse
	this.Decomposes = null  // inverse
	this.HasAssociations = null  // inverse

    }
}