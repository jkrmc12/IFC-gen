
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDirection = require('./IfcDirection')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcExtrudedAreaSolid = require('./IfcExtrudedAreaSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolidtapered.htm
 */
module.exports = class IfcExtrudedAreaSolidTapered extends IfcExtrudedAreaSolid {
  
    constructor(sweptArea, extrudedDirection, depth, endSweptArea) {
        super(sweptArea,extrudedDirection,depth)
		this.EndSweptArea = endSweptArea

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ExtrudedDirection))
		parameters.push(BaseIfc.toStepValue(this.Depth))
		parameters.push(BaseIfc.toStepValue(this.EndSweptArea))

        return parameters.join()
    }
}