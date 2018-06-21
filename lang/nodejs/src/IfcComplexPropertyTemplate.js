
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcPropertySetTemplate = require('./IfcPropertySetTemplate')
const IfcComplexPropertyTemplateTypeEnum = require('./IfcComplexPropertyTemplateTypeEnum')
const IfcPropertyTemplate = require('./IfcPropertyTemplate')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexpropertytemplate.htm
 */
module.exports = class IfcComplexPropertyTemplate extends IfcPropertyTemplate {
  
    constructor(globalId) {
        super(globalId)
        	this.UsageName = null  // optional
	this.TemplateType = null  // optional
	this.HasPropertyTemplates = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UsageName))
		parameters.push(BaseIfc.toStepValue(this.TemplateType))
		parameters.push(BaseIfc.toStepValue(this.HasPropertyTemplates))

        return parameters.join()
    }
}