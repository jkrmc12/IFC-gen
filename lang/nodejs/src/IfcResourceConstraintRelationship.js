
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcConstraint = require('./IfcConstraint')
const IfcActorRole = require('./IfcActorRole')
const IfcAppliedValue = require('./IfcAppliedValue')
const IfcApproval = require('./IfcApproval')
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceconstraintrelationship.htm
 */
module.exports = class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingConstraint, relatedResourceObjects) {
        super()
		this.RelatingConstraint = relatingConstraint
		this.RelatedResourceObjects = relatedResourceObjects

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingConstraint))
		parameters.push(BaseIfc.toStepValue(this.RelatedResourceObjects))

        return parameters.join()
    }
}