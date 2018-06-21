
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcone.htm
 */
module.exports = class IfcRightCircularCone extends IfcCsgPrimitive3D {
  
    constructor(position, height, bottomRadius) {
        super(position)
		this.Height = height
		this.BottomRadius = bottomRadius

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Height))
		parameters.push(BaseIfc.toStepValue(this.BottomRadius))

        return parameters.join()
    }
}