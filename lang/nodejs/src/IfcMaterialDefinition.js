
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinition.htm
 */
module.exports = class IfcMaterialDefinition extends BaseIfc {
  
    constructor() {
        super()
        	this.AssociatedTo = null  // inverse
	this.HasExternalReferences = null  // inverse
	this.HasProperties = null  // inverse

    }
}