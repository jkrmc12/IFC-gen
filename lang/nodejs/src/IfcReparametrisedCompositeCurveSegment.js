
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcTransitionCode = require('./IfcTransitionCode')
const IfcBoolean = require('./IfcBoolean')
const IfcCurve = require('./IfcCurve')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurve = require('./IfcCompositeCurve')
const IfcParameterValue = require('./IfcParameterValue')
const IfcCompositeCurveSegment = require('./IfcCompositeCurveSegment')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreparametrisedcompositecurvesegment.htm
 */
module.exports = class IfcReparametrisedCompositeCurveSegment extends IfcCompositeCurveSegment {
  
    constructor(transition, sameSense, parentCurve, paramLength) {
        super(transition,sameSense,parentCurve)
		this.ParamLength = paramLength

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Transition))
		parameters.push(BaseIfc.toStepValue(this.SameSense))
		parameters.push(BaseIfc.toStepValue(this.ParentCurve))
		parameters.push(BaseIfc.toStepValue(this.ParamLength))

        return parameters.join()
    }
}