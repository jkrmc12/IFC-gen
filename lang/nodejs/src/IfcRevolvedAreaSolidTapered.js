
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcAxis1Placement = require('./IfcAxis1Placement')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcLine = require('./IfcLine')
const IfcRevolvedAreaSolid = require('./IfcRevolvedAreaSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolidtapered.htm
 */
module.exports = class IfcRevolvedAreaSolidTapered extends IfcRevolvedAreaSolid {
  
    constructor(sweptArea, axis, angle, endSweptArea) {
        super(sweptArea,axis,angle)
		this.EndSweptArea = endSweptArea

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Axis))
		parameters.push(BaseIfc.toStepValue(this.Angle))
		parameters.push(BaseIfc.toStepValue(this.EndSweptArea))

        return parameters.join()
    }
}