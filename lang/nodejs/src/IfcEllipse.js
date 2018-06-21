
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcConic = require('./IfcConic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipse.htm
 */
module.exports = class IfcEllipse extends IfcConic {
  
    constructor(position, semiAxis1, semiAxis2) {
        super(position)
		this.SemiAxis1 = semiAxis1
		this.SemiAxis2 = semiAxis2

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis1))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis2))

        return parameters.join()
    }
}