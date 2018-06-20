
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm
 */
module.exports = class IfcRepresentationItem extends BaseIfc {
  
    constructor() {
        super()
        	this.LayerAssignment = null  // inverse
	this.StyledByItem = null  // inverse

    }
}