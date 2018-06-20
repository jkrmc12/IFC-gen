
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralload.htm
 */
module.exports = class IfcStructuralLoad extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional

    }
}