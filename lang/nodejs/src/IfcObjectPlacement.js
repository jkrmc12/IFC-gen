
const BaseIfc = require('./BaseIfc')
const IfcProduct = require('./IfcProduct')
const IfcLocalPlacement = require('./IfcLocalPlacement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm
 */
module.exports = class IfcObjectPlacement extends BaseIfc {
  
    constructor() {
        super()
        	this.PlacesObject = null  // inverse
	this.ReferencedByPlacements = null  // inverse

    }
}