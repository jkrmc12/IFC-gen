
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurveSegment = require('./IfcCompositeCurveSegment')
const IfcLogical = require('./IfcLogical')
const IfcInteger = require('./IfcInteger')
const IfcSurface = require('./IfcSurface')
const IfcBoundaryCurve = require('./IfcBoundaryCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcouterboundarycurve.htm
 */
module.exports = class IfcOuterBoundaryCurve extends IfcBoundaryCurve {
  
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