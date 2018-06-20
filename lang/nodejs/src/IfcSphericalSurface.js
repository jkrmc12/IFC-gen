
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcElementarySurface = require('./IfcElementarySurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphericalsurface.htm
 */
module.exports = class IfcSphericalSurface extends IfcElementarySurface {
  
    constructor(position, radius) {
        super(position)
		this.Radius = radius

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))

        return parameters.join()
    }
}