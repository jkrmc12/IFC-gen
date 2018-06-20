
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcPropertySet = require('./IfcPropertySet')
const IfcPropertyDependencyRelationship = require('./IfcPropertyDependencyRelationship')
const IfcComplexProperty = require('./IfcComplexProperty')
const IfcResourceConstraintRelationship = require('./IfcResourceConstraintRelationship')
const IfcResourceApprovalRelationship = require('./IfcResourceApprovalRelationship')
const IfcAddress = require('./IfcAddress')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcExternalReference = require('./IfcExternalReference')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcTable = require('./IfcTable')
const IfcTimeSeries = require('./IfcTimeSeries')
const IfcSimpleProperty = require('./IfcSimpleProperty')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyreferencevalue.htm
 */
module.exports = class IfcPropertyReferenceValue extends IfcSimpleProperty {
  
    constructor(name) {
        super(name)
        	this.UsageName = null  // optional
	this.PropertyReference = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UsageName))
		parameters.push(BaseIfc.toStepValue(this.PropertyReference))

        return parameters.join()
    }
}