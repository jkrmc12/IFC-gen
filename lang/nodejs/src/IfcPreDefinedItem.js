
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm
 */
module.exports = class IfcPreDefinedItem extends IfcPresentationItem {
  
    constructor(name) {
        super()
		this.Name = name

        
    }
}