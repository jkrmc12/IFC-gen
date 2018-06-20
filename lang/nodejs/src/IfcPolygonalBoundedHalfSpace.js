
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcSurface = require('./IfcSurface')
const IfcBoolean = require('./IfcBoolean')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcBoundedCurve = require('./IfcBoundedCurve')
const IfcHalfSpaceSolid = require('./IfcHalfSpaceSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm
 */
module.exports = class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid {
  
    constructor(baseSurface, agreementFlag, position, polygonalBoundary) {
        super(baseSurface,agreementFlag)
		this.Position = position
		this.PolygonalBoundary = polygonalBoundary

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BaseSurface))
		parameters.push(BaseIfc.toStepValue(this.AgreementFlag))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.PolygonalBoundary))

        return parameters.join()
    }
}