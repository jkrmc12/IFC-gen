
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcInteger = require('./IfcInteger')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcBSplineSurfaceForm = require('./IfcBSplineSurfaceForm')
const IfcLogical = require('./IfcLogical')
const IfcParameterValue = require('./IfcParameterValue')
const IfcKnotType = require('./IfcKnotType')
const IfcBSplineSurface = require('./IfcBSplineSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurfacewithknots.htm
 */
module.exports = class IfcBSplineSurfaceWithKnots extends IfcBSplineSurface {
  
    constructor(uDegree, vDegree, controlPointsList, surfaceForm, uClosed, vClosed, selfIntersect, uMultiplicities, vMultiplicities, uKnots, vKnots, knotSpec) {
        super(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect)
		this.UMultiplicities = uMultiplicities
		this.VMultiplicities = vMultiplicities
		this.UKnots = uKnots
		this.VKnots = vKnots
		this.KnotSpec = knotSpec

        
    Object.defineProperty(this, 'KnotVUpper', {
        get: () => {throw "Derived property logic has not been implemented for KnotVUpper."}, // derived
        set: (value) => {this.KnotVUpper = value}
    })

    Object.defineProperty(this, 'KnotUUpper', {
        get: () => {throw "Derived property logic has not been implemented for KnotUUpper."}, // derived
        set: (value) => {this.KnotUUpper = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.UDegree))
		parameters.push(BaseIfc.toStepValue(this.VDegree))
		parameters.push(BaseIfc.toStepValue(this.ControlPointsList))
		parameters.push(BaseIfc.toStepValue(this.SurfaceForm))
		parameters.push(BaseIfc.toStepValue(this.UClosed))
		parameters.push(BaseIfc.toStepValue(this.VClosed))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.UMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.VMultiplicities))
		parameters.push(BaseIfc.toStepValue(this.UKnots))
		parameters.push(BaseIfc.toStepValue(this.VKnots))
		parameters.push(BaseIfc.toStepValue(this.KnotSpec))

        return parameters.join()
    }
}