
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurveSegment = require('./IfcCompositeCurveSegment')
const IfcLogical = require('./IfcLogical')
const IfcInteger = require('./IfcInteger')
const IfcSurface = require('./IfcSurface')
const IfcCompositeCurve = require('./IfcCompositeCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurveonsurface.htm
 */
module.exports = class IfcCompositeCurveOnSurface extends IfcCompositeCurve {
  
    constructor(segments, selfIntersect) {
        super(segments,selfIntersect)
        
    Object.defineProperty(this, 'BasisSurface', {
        get: () => {throw "Derived property logic has not been implemented for BasisSurface."}, // derived
        set: (value) => {this.BasisSurface = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join()
    }
}