
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcStructuralLoadOrResult = require('./IfcStructuralLoadOrResult')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadstatic.htm
 */
module.exports = class IfcStructuralLoadStatic extends IfcStructuralLoadOrResult {
  
    constructor() {
        super()
        
    }
}