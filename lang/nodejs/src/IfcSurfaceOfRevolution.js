
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcAxis1Placement = require('./IfcAxis1Placement')
const IfcLine = require('./IfcLine')
const IfcSweptSurface = require('./IfcSweptSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm
 */
module.exports = class IfcSurfaceOfRevolution extends IfcSweptSurface {
  
    constructor(sweptCurve, axisPosition) {
        super(sweptCurve)
		this.AxisPosition = axisPosition

        
    Object.defineProperty(this, 'AxisLine', {
        get: () => {throw "Derived property logic has not been implemented for AxisLine."}, // derived
        set: (value) => {this.AxisLine = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptCurve))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.AxisPosition))

        return parameters.join()
    }
}