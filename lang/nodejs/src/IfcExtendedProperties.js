
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcProperty = require('./IfcProperty')
const IfcPropertyAbstraction = require('./IfcPropertyAbstraction')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextendedproperties.htm
 */
module.exports = class IfcExtendedProperties extends IfcPropertyAbstraction {
  
    constructor(properties) {
        super()
		this.Properties = properties

        	this.Name = null  // optional
	this.Description = null  // optional

    }
}