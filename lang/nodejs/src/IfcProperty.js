
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcPropertySet = require('./IfcPropertySet')
const IfcPropertyDependencyRelationship = require('./IfcPropertyDependencyRelationship')
const IfcComplexProperty = require('./IfcComplexProperty')
const IfcResourceConstraintRelationship = require('./IfcResourceConstraintRelationship')
const IfcResourceApprovalRelationship = require('./IfcResourceApprovalRelationship')
const IfcPropertyAbstraction = require('./IfcPropertyAbstraction')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm
 */
module.exports = class IfcProperty extends IfcPropertyAbstraction {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Description = null  // optional
	this.PartOfPset = null  // inverse
	this.PropertyForDependance = null  // inverse
	this.PropertyDependsOn = null  // inverse
	this.PartOfComplex = null  // inverse
	this.HasConstraints = null  // inverse
	this.HasApprovals = null  // inverse

    }
}