
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcActorRole = require('./IfcActorRole')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcApproval = require('./IfcApproval')
const IfcConstraint = require('./IfcConstraint')
const IfcContextDependentUnit = require('./IfcContextDependentUnit')
const IfcConversionBasedUnit = require('./IfcConversionBasedUnit')
const IfcExternalInformation = require('./IfcExternalInformation')
const IfcExternalReference = require('./IfcExternalReference')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcProfileDef = require('./IfcProfileDef')
const IfcPropertyAbstraction = require('./IfcPropertyAbstraction')
const IfcTimeSeries = require('./IfcTimeSeries')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceapprovalrelationship.htm
 */
module.exports = class IfcResourceApprovalRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatedResourceObjects, relatingApproval) {
        super()
		this.RelatedResourceObjects = relatedResourceObjects
		this.RelatingApproval = relatingApproval

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatedResourceObjects))
		parameters.push(BaseIfc.toStepValue(this.RelatingApproval))

        return parameters.join()
    }
}