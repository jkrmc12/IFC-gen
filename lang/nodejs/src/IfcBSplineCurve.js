
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcInteger = require('./IfcInteger')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcBSplineCurveForm = require('./IfcBSplineCurveForm')
const IfcLogical = require('./IfcLogical')
const IfcBoundedCurve = require('./IfcBoundedCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurve.htm
 */
module.exports = class IfcBSplineCurve extends IfcBoundedCurve {
  
    constructor(degree, controlPointsList, curveForm, closedCurve, selfIntersect) {
        super()
		this.Degree = degree
		this.ControlPointsList = controlPointsList
		this.CurveForm = curveForm
		this.ClosedCurve = closedCurve
		this.SelfIntersect = selfIntersect

        
    Object.defineProperty(this, 'UpperIndexOnControlPoints', {
        get: () => {throw "Derived property logic has not been implemented for UpperIndexOnControlPoints."}, // derived
        set: (value) => {this.UpperIndexOnControlPoints = value}
    })

    Object.defineProperty(this, 'ControlPoints', {
        get: () => {throw "Derived property logic has not been implemented for ControlPoints."}, // derived
        set: (value) => {this.ControlPoints = value}
    })

    }
}