
const BaseIfc = require('./BaseIfc')
const IfcProduct = require('./IfcProduct')
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocalplacement.htm
 */
module.exports = class IfcLocalPlacement extends IfcObjectPlacement {
  
    constructor(relativePlacement) {
        super()
		this.RelativePlacement = relativePlacement

        	this.PlacementRelTo = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.PlacementRelTo))
		parameters.push(BaseIfc.toStepValue(this.RelativePlacement))

        return parameters.join()
    }
}