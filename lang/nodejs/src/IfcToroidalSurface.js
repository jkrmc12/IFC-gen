
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcElementarySurface = require('./IfcElementarySurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctoroidalsurface.htm
 */
module.exports = class IfcToroidalSurface extends IfcElementarySurface {
  
    constructor(position, majorRadius, minorRadius) {
        super(position)
		this.MajorRadius = majorRadius
		this.MinorRadius = minorRadius

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.MajorRadius))
		parameters.push(BaseIfc.toStepValue(this.MinorRadius))

        return parameters.join()
    }
}