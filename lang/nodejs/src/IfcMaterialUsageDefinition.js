
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialusagedefinition.htm
 */
module.exports = class IfcMaterialUsageDefinition extends BaseIfc {
  
    constructor() {
        super()
        	this.AssociatedTo = null  // inverse

    }
}