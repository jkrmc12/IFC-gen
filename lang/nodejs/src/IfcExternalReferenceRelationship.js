
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReference = require('./IfcExternalReference')
const IfcActorRole = require('./IfcActorRole')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcApproval = require('./IfcApproval')
const IfcConstraint = require('./IfcConstraint')
const IfcContextDependentUnit = require('./IfcContextDependentUnit')
const IfcConversionBasedUnit = require('./IfcConversionBasedUnit')
const IfcExternalInformation = require('./IfcExternalInformation')
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreferencerelationship.htm
 */
module.exports = class IfcExternalReferenceRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingReference, relatedResourceObjects) {
        super()
		this.RelatingReference = relatingReference
		this.RelatedResourceObjects = relatedResourceObjects

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingReference))
		parameters.push(BaseIfc.toStepValue(this.RelatedResourceObjects))

        return parameters.join()
    }
}