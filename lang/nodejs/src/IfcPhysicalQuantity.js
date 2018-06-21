
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalquantity.htm
 */
module.exports = class IfcPhysicalQuantity extends BaseIfc {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Description = null  // optional
	this.HasExternalReferences = null  // inverse
	this.PartOfComplex = null  // inverse

    }
}