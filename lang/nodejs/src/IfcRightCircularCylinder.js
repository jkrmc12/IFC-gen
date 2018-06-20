
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcylinder.htm
 */
module.exports = class IfcRightCircularCylinder extends IfcCsgPrimitive3D {
  
    constructor(position, height, radius) {
        super(position)
		this.Height = height
		this.Radius = radius

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Height))
		parameters.push(BaseIfc.toStepValue(this.Radius))

        return parameters.join()
    }
}