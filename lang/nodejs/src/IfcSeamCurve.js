
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcPcurve = require('./IfcPcurve')
const IfcPreferredSurfaceCurveRepresentation = require('./IfcPreferredSurfaceCurveRepresentation')
const IfcSurface = require('./IfcSurface')
const IfcSurfaceCurve = require('./IfcSurfaceCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcseamcurve.htm
 */
module.exports = class IfcSeamCurve extends IfcSurfaceCurve {
  
    constructor(curve3D, associatedGeometry, masterRepresentation) {
        super(curve3D,associatedGeometry,masterRepresentation)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Curve3D))
		parameters.push(BaseIfc.toStepValue(this.AssociatedGeometry))
		parameters.push(BaseIfc.toStepValue(this.MasterRepresentation))

        return parameters.join()
    }
}