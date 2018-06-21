
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcTransitionCode = require('./IfcTransitionCode')
const IfcBoolean = require('./IfcBoolean')
const IfcCurve = require('./IfcCurve')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCompositeCurve = require('./IfcCompositeCurve')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm
 */
module.exports = class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem {
  
    constructor(transition, sameSense, parentCurve) {
        super()
		this.Transition = transition
		this.SameSense = sameSense
		this.ParentCurve = parentCurve

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })
	this.UsingCurves = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Transition))
		parameters.push(BaseIfc.toStepValue(this.SameSense))
		parameters.push(BaseIfc.toStepValue(this.ParentCurve))

        return parameters.join()
    }
}