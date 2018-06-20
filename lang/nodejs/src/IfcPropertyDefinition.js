
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcRoot = require('./IfcRoot')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydefinition.htm
 */
module.exports = class IfcPropertyDefinition extends IfcRoot {
  
    constructor(globalId) {
        super(globalId)
        	this.HasContext = null  // inverse
	this.HasAssociations = null  // inverse

    }
}