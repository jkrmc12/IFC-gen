
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcPropertySet = require('./IfcPropertySet')
const IfcPropertyDependencyRelationship = require('./IfcPropertyDependencyRelationship')
const IfcResourceConstraintRelationship = require('./IfcResourceConstraintRelationship')
const IfcResourceApprovalRelationship = require('./IfcResourceApprovalRelationship')
const IfcProperty = require('./IfcProperty')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm
 */
module.exports = class IfcComplexProperty extends IfcProperty {
  
    constructor(name, usageName, hasProperties) {
        super(name)
		this.UsageName = usageName
		this.HasProperties = hasProperties

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UsageName))
		parameters.push(BaseIfc.toStepValue(this.HasProperties))

        return parameters.join()
    }
}