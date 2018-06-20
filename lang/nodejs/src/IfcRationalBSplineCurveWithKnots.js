
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
const IfcReal = require('./IfcReal')
const IfcBSplineCurveWithKnots = require('./IfcBSplineCurveWithKnots')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinecurvewithknots.htm
 */
module.exports = class IfcRationalBSplineCurveWithKnots extends IfcBSplineCurveWithKnots {
  
    constructor(degree, controlPointsList, curveForm, closedCurve, selfIntersect, knotMultiplicities, knots, knotSpec, weightsData) {
        super(degree,controlPointsList,curveForm,closedCurve,selfIntersect,knotMultiplicities,knots,knotSpec)
		this.WeightsData = weightsData

        
    Object.defineProperty(this, 'Weights', {
        get: () => {throw "Derived property logic has not been implemented for Weights."}, // derived
        set: (value) => {this.Weights = value}
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
		parameters.push(BaseIfc.toStepValue(this.WeightsData))

        return parameters.join()
    }
}