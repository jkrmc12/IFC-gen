
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
const IfcPropertyDefinition = require('./IfcPropertyDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinition.htm
 */
module.exports = class IfcPropertySetDefinition extends IfcPropertyDefinition {
  
    constructor(globalId) {
        super(globalId)
        	this.DefinesType = null  // inverse
	this.IsDefinedBy = null  // inverse
	this.DefinesOccurrence = null  // inverse

    }
}