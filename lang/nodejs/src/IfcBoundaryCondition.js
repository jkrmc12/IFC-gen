
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycondition.htm
 */
module.exports = class IfcBoundaryCondition extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional

    }
}