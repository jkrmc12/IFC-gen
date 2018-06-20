
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcAxis1Placement = require('./IfcAxis1Placement')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcLine = require('./IfcLine')
const IfcSweptAreaSolid = require('./IfcSweptAreaSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolid.htm
 */
module.exports = class IfcRevolvedAreaSolid extends IfcSweptAreaSolid {
  
    constructor(sweptArea, axis, angle) {
        super(sweptArea)
		this.Axis = axis
		this.Angle = angle

        
    Object.defineProperty(this, 'AxisLine', {
        get: () => {throw "Derived property logic has not been implemented for AxisLine."}, // derived
        set: (value) => {this.AxisLine = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Axis))
		parameters.push(BaseIfc.toStepValue(this.Angle))

        return parameters.join()
    }
}