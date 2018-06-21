
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyabstraction.htm
 */
module.exports = class IfcPropertyAbstraction extends BaseIfc {
  
    constructor() {
        super()
        	this.HasExternalReferences = null  // inverse

    }
}