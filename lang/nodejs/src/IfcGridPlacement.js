
const BaseIfc = require('./BaseIfc')
const IfcProduct = require('./IfcProduct')
const IfcLocalPlacement = require('./IfcLocalPlacement')
const IfcVirtualGridIntersection = require('./IfcVirtualGridIntersection')
const IfcDirection = require('./IfcDirection')
const IfcObjectPlacement = require('./IfcObjectPlacement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridplacement.htm
 */
module.exports = class IfcGridPlacement extends IfcObjectPlacement {
  
    constructor(placementLocation) {
        super()
		this.PlacementLocation = placementLocation

        	this.PlacementRefDirection = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.PlacementLocation))
		parameters.push(BaseIfc.toStepValue(this.PlacementRefDirection))

        return parameters.join()
    }
}