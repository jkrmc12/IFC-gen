
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm
 */
module.exports = class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity {
  
    constructor(name) {
        super(name)
        	this.Unit = null  // optional

    }
}