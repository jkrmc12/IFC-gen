
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcInteger = require('./IfcInteger')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcBSplineCurveForm = require('./IfcBSplineCurveForm')
const IfcLogical = require('./IfcLogical')
const IfcParameterValue = require('./IfcParameterValue')
const IfcKnotType = require('./IfcKnotType')
const IfcBSplineCurve = require('./IfcBSplineCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurvewithknots.htm
 */
module.exports = class IfcBSplineCurveWithKnots extends IfcBSplineCurve {
  
    constructor(degree, controlPointsList, curveForm, closedCurve, selfIntersect, knotMultiplicities, knots, knotSpec) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect)
		this.KnotMultiplicities = knotMultiplicities
		this.Knots = knots
		this.KnotSpec = knotSpec

        
    Object.defineProperty(this, 'UpperIndexOnKnots', {
        get: () => {throw "Derived property logic has not been implemented for UpperIndexOnKnots."}, // derived
        set: (value) => {this.UpperIndexOnKnots = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Degree))
		parameters.push(BaseIfc.toStepValue(this.ControlPointsList))
		parameters.push(BaseIfc.toStepValue(this.CurveForm))
		parameters.push(BaseIfc.toStepValue(this.ClosedCurve))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.KnotMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.Knots))
		parameters.push(BaseIfc.toStepValue(this.KnotSpec))

        return parameters.join()
    }
}