
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurveSegment = require('./IfcCompositeCurveSegment')
const IfcLogical = require('./IfcLogical')
const IfcInteger = require('./IfcInteger')
const IfcSurface = require('./IfcSurface')
const IfcCompositeCurveOnSurface = require('./IfcCompositeCurveOnSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycurve.htm
 */
module.exports = class IfcBoundaryCurve extends IfcCompositeCurveOnSurface {
  
    constructor(segments, selfIntersect) {
        super(segments,selfIntersect)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join()
    }
}