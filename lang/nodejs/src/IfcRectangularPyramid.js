
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangularpyramid.htm
 */
module.exports = class IfcRectangularPyramid extends IfcCsgPrimitive3D {
  
    constructor(position, xLength, yLength, height) {
        super(position)
		this.XLength = xLength
		this.YLength = yLength
		this.Height = height

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.XLength))
		parameters.push(BaseIfc.toStepValue(this.YLength))
		parameters.push(BaseIfc.toStepValue(this.Height))

        return parameters.join()
    }
}