
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
const IfcReal = require('./IfcReal')
const IfcBSplineSurfaceWithKnots = require('./IfcBSplineSurfaceWithKnots')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbsplinesurfacewithknots.htm
 */
module.exports = class IfcRationalBSplineSurfaceWithKnots extends IfcBSplineSurfaceWithKnots {
  
    constructor(uDegree, vDegree, controlPointsList, surfaceForm, uClosed, vClosed, selfIntersect, uMultiplicities, vMultiplicities, uKnots, vKnots, knotSpec, weightsData) {
        super(uDegree,vDegree,controlPointsList,surfaceForm,uClosed,vClosed,selfIntersect,uMultiplicities,vMultiplicities,uKnots,vKnots,knotSpec)
		this.WeightsData = weightsData

        
    Object.defineProperty(this, 'Weights', {
        get: () => {throw "Derived property logic has not been implemented for Weights."}, // derived
        set: (value) => {this.Weights = value}
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
		parameters.push(BaseIfc.toStepValue(this.WeightsData))

        return parameters.join()
    }
}