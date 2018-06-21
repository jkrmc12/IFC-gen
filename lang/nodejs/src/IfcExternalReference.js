
const BaseIfc = require('./BaseIfc')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm
 */
module.exports = class IfcExternalReference extends BaseIfc {
  
    constructor() {
        super()
        	this.Location = null  // optional
	this.Identification = null  // optional
	this.Name = null  // optional
	this.ExternalReferenceForResources = null  // inverse

    }
}