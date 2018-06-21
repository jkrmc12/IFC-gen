
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourspecification.htm
 */
module.exports = class IfcColourSpecification extends IfcPresentationItem {
  
    constructor() {
        super()
        	this.Name = null  // optional

    }
}