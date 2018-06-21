
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcPropertySet = require('./IfcPropertySet')
const IfcPropertyDependencyRelationship = require('./IfcPropertyDependencyRelationship')
const IfcComplexProperty = require('./IfcComplexProperty')
const IfcResourceConstraintRelationship = require('./IfcResourceConstraintRelationship')
const IfcResourceApprovalRelationship = require('./IfcResourceApprovalRelationship')
const IfcProperty = require('./IfcProperty')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimpleproperty.htm
 */
module.exports = class IfcSimpleProperty extends IfcProperty {
  
    constructor(name) {
        super(name)
        
    }
}