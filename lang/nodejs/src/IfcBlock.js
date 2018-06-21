
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblock.htm
 */
module.exports = class IfcBlock extends IfcCsgPrimitive3D {
  
    constructor(position, xLength, yLength, zLength) {
        super(position)
		this.XLength = xLength
		this.YLength = yLength
		this.ZLength = zLength

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.XLength))
		parameters.push(BaseIfc.toStepValue(this.YLength))
		parameters.push(BaseIfc.toStepValue(this.ZLength))

        return parameters.join()
    }
}