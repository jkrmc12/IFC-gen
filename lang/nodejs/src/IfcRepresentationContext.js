
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcRepresentation = require('./IfcRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationcontext.htm
 */
module.exports = class IfcRepresentationContext extends BaseIfc {
  
    constructor() {
        super()
        	this.ContextIdentifier = null  // optional
	this.ContextType = null  // optional
	this.RepresentationsInContext = null  // inverse

    }
}