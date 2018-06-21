
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRepresentation = require('./IfcRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm
 */
module.exports = class IfcProductRepresentation extends BaseIfc {
  
    constructor(representations) {
        super()
		this.Representations = representations

        	this.Name = null  // optional
	this.Description = null  // optional

    }
}