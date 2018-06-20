
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDirection = require('./IfcDirection')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcReal = require('./IfcReal')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator2dnonuniform.htm
 */
module.exports = class IfcCartesianTransformationOperator2DnonUniform extends IfcCartesianTransformationOperator2D {
  
    constructor(localOrigin) {
        super(localOrigin)
        	this.Scale2 = null  // optional

    Object.defineProperty(this, 'Scl2', {
        get: () => {throw "Derived property logic has not been implemented for Scl2."}, // derived
        set: (value) => {this.Scl2 = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))
		parameters.push(BaseIfc.toStepValue(this.Scale2))

        return parameters.join()
    }
}