
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

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraint.htm
 */
module.exports = class IfcConstraint extends BaseIfc {
  
    constructor(name, constraintGrade) {
        super()
		this.Name = name
		this.ConstraintGrade = constraintGrade

        	this.Description = null  // optional
	this.ConstraintSource = null  // optional
	this.CreatingActor = null  // optional
	this.CreationTime = null  // optional
	this.UserDefinedGrade = null  // optional
	this.HasExternalReferences = null  // inverse
	this.PropertiesForConstraint = null  // inverse

    }
}