
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcPropertySetTemplateTypeEnum = require('./IfcPropertySetTemplateTypeEnum')
const IfcIdentifier = require('./IfcIdentifier')
const IfcPropertyTemplate = require('./IfcPropertyTemplate')
const IfcRelDefinesByTemplate = require('./IfcRelDefinesByTemplate')
const IfcPropertyTemplateDefinition = require('./IfcPropertyTemplateDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysettemplate.htm
 */
module.exports = class IfcPropertySetTemplate extends IfcPropertyTemplateDefinition {
  
    constructor(globalId, hasPropertyTemplates) {
        super(globalId)
		this.HasPropertyTemplates = hasPropertyTemplates

        	this.TemplateType = null  // optional
	this.ApplicableEntity = null  // optional
	this.Defines = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TemplateType))
		parameters.push(BaseIfc.toStepValue(this.ApplicableEntity))
		parameters.push(BaseIfc.toStepValue(this.HasPropertyTemplates))

        return parameters.join()
    }
}