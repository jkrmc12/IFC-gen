
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcInteger = require('./IfcInteger')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcBSplineSurfaceForm = require('./IfcBSplineSurfaceForm')
const IfcLogical = require('./IfcLogical')
const IfcBoundedSurface = require('./IfcBoundedSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurface.htm
 */
module.exports = class IfcBSplineSurface extends IfcBoundedSurface {
  
    constructor(uDegree, vDegree, controlPointsList, surfaceForm, uClosed, vClosed, selfIntersect) {
        super()
		this.UDegree = uDegree
		this.VDegree = vDegree
		this.ControlPointsList = controlPointsList
		this.SurfaceForm = surfaceForm
		this.UClosed = uClosed
		this.VClosed = vClosed
		this.SelfIntersect = selfIntersect

        
    Object.defineProperty(this, 'UUpper', {
        get: () => {throw "Derived property logic has not been implemented for UUpper."}, // derived
        set: (value) => {this.UUpper = value}
    })

    Object.defineProperty(this, 'VUpper', {
        get: () => {throw "Derived property logic has not been implemented for VUpper."}, // derived
        set: (value) => {this.VUpper = value}
    })

    Object.defineProperty(this, 'ControlPoints', {
        get: () => {throw "Derived property logic has not been implemented for ControlPoints."}, // derived
        set: (value) => {this.ControlPoints = value}
    })

    }
}