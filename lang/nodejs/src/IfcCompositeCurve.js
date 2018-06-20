
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurveSegment = require('./IfcCompositeCurveSegment')
const IfcLogical = require('./IfcLogical')
const IfcInteger = require('./IfcInteger')
const IfcBoundedCurve = require('./IfcBoundedCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm
 */
module.exports = class IfcCompositeCurve extends IfcBoundedCurve {
  
    constructor(segments, selfIntersect) {
        super()
		this.Segments = segments
		this.SelfIntersect = selfIntersect

        
    Object.defineProperty(this, 'NSegments', {
        get: () => {throw "Derived property logic has not been implemented for NSegments."}, // derived
        set: (value) => {this.NSegments = value}
    })

    Object.defineProperty(this, 'ClosedCurve', {
        get: () => {throw "Derived property logic has not been implemented for ClosedCurve."}, // derived
        set: (value) => {this.ClosedCurve = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join()
    }
}