
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDirection = require('./IfcDirection')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcSweptAreaSolid = require('./IfcSweptAreaSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm
 */
module.exports = class IfcExtrudedAreaSolid extends IfcSweptAreaSolid {
  
    constructor(sweptArea, extrudedDirection, depth) {
        super(sweptArea)
		this.ExtrudedDirection = extrudedDirection
		this.Depth = depth

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ExtrudedDirection))
		parameters.push(BaseIfc.toStepValue(this.Depth))

        return parameters.join()
    }
}