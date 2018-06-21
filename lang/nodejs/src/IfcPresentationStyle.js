
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm
 */
module.exports = class IfcPresentationStyle extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional

    }
}