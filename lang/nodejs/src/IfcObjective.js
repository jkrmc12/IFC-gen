
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcConstraintEnum = require('./IfcConstraintEnum')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcDateTime = require('./IfcDateTime')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcResourceConstraintRelationship = require('./IfcResourceConstraintRelationship')
const IfcConstraint = require('./IfcConstraint')
const IfcLogicalOperatorEnum = require('./IfcLogicalOperatorEnum')
const IfcObjectiveEnum = require('./IfcObjectiveEnum')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm
 */
module.exports = class IfcObjective extends IfcConstraint {
  
    constructor(name, constraintGrade, objectiveQualifier) {
        super(name,constraintGrade)
		this.ObjectiveQualifier = objectiveQualifier

        	this.BenchmarkValues = null  // optional
	this.LogicalAggregator = null  // optional
	this.UserDefinedQualifier = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ConstraintGrade))
		parameters.push(BaseIfc.toStepValue(this.ConstraintSource))
		parameters.push(BaseIfc.toStepValue(this.CreatingActor))
		parameters.push(BaseIfc.toStepValue(this.CreationTime))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedGrade))
		parameters.push(BaseIfc.toStepValue(this.BenchmarkValues))
		parameters.push(BaseIfc.toStepValue(this.LogicalAggregator))
		parameters.push(BaseIfc.toStepValue(this.ObjectiveQualifier))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedQualifier))

        return parameters.join()
    }
}