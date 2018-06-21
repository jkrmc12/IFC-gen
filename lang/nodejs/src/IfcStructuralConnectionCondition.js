
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnectioncondition.htm
 */
module.exports = class IfcStructuralConnectionCondition extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional

    }
}