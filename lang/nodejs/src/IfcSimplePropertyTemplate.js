
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcComplexPropertyTemplate = require('./IfcComplexPropertyTemplate')
const IfcPropertySetTemplate = require('./IfcPropertySetTemplate')
const IfcSimplePropertyTemplateTypeEnum = require('./IfcSimplePropertyTemplateTypeEnum')
const IfcPropertyEnumeration = require('./IfcPropertyEnumeration')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcStateEnum = require('./IfcStateEnum')
const IfcPropertyTemplate = require('./IfcPropertyTemplate')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplepropertytemplate.htm
 */
module.exports = class IfcSimplePropertyTemplate extends IfcPropertyTemplate {
  
    constructor(globalId) {
        super(globalId)
        	this.TemplateType = null  // optional
	this.PrimaryMeasureType = null  // optional
	this.SecondaryMeasureType = null  // optional
	this.Enumerators = null  // optional
	this.PrimaryUnit = null  // optional
	this.SecondaryUnit = null  // optional
	this.Expression = null  // optional
	this.AccessState = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TemplateType))
		parameters.push(BaseIfc.toStepValue(this.PrimaryMeasureType))
		parameters.push(BaseIfc.toStepValue(this.SecondaryMeasureType))
		parameters.push(BaseIfc.toStepValue(this.Enumerators))
		parameters.push(BaseIfc.toStepValue(this.PrimaryUnit))
		parameters.push(BaseIfc.toStepValue(this.SecondaryUnit))
		parameters.push(BaseIfc.toStepValue(this.Expression))
		parameters.push(BaseIfc.toStepValue(this.AccessState))

        return parameters.join()
    }
}