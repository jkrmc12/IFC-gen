
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDirection = require('./IfcDirection')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcVector = require('./IfcVector')
const IfcSweptSurface = require('./IfcSweptSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceoflinearextrusion.htm
 */
module.exports = class IfcSurfaceOfLinearExtrusion extends IfcSweptSurface {
  
    constructor(sweptCurve, extrudedDirection, depth) {
        super(sweptCurve)
		this.ExtrudedDirection = extrudedDirection
		this.Depth = depth

        
    Object.defineProperty(this, 'ExtrusionAxis', {
        get: () => {throw "Derived property logic has not been implemented for ExtrusionAxis."}, // derived
        set: (value) => {this.ExtrusionAxis = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptCurve))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ExtrudedDirection))
		parameters.push(BaseIfc.toStepValue(this.Depth))

        return parameters.join()
    }
}