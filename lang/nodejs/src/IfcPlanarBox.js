
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcPlanarExtent = require('./IfcPlanarExtent')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarbox.htm
 */
module.exports = class IfcPlanarBox extends IfcPlanarExtent {
  
    constructor(sizeInX, sizeInY, placement) {
        super(sizeInX,sizeInY)
		this.Placement = placement

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SizeInX))
		parameters.push(BaseIfc.toStepValue(this.SizeInY))
		parameters.push(BaseIfc.toStepValue(this.Placement))

        return parameters.join()
    }
}