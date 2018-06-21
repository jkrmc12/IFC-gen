
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcPcurve = require('./IfcPcurve')
const IfcPreferredSurfaceCurveRepresentation = require('./IfcPreferredSurfaceCurveRepresentation')
const IfcSurface = require('./IfcSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurve.htm
 */
module.exports = class IfcSurfaceCurve extends IfcCurve {
  
    constructor(curve3D, associatedGeometry, masterRepresentation) {
        super()
		this.Curve3D = curve3D
		this.AssociatedGeometry = associatedGeometry
		this.MasterRepresentation = masterRepresentation

        
    Object.defineProperty(this, 'BasisSurface', {
        get: () => {throw "Derived property logic has not been implemented for BasisSurface."}, // derived
        set: (value) => {this.BasisSurface = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Curve3D))
		parameters.push(BaseIfc.toStepValue(this.AssociatedGeometry))
		parameters.push(BaseIfc.toStepValue(this.MasterRepresentation))

        return parameters.join()
    }
}