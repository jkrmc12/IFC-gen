
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcComplexPropertyTemplate = require('./IfcComplexPropertyTemplate')
const IfcPropertySetTemplate = require('./IfcPropertySetTemplate')
const IfcPropertyTemplateDefinition = require('./IfcPropertyTemplateDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytemplate.htm
 */
module.exports = class IfcPropertyTemplate extends IfcPropertyTemplateDefinition {
  
    constructor(globalId) {
        super(globalId)
        	this.PartOfComplexTemplate = null  // inverse
	this.PartOfPsetTemplate = null  // inverse

    }
}