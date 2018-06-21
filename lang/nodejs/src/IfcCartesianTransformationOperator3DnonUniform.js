
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDirection = require('./IfcDirection')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcReal = require('./IfcReal')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianTransformationOperator3D = require('./IfcCartesianTransformationOperator3D')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3dnonuniform.htm
 */
module.exports = class IfcCartesianTransformationOperator3DnonUniform extends IfcCartesianTransformationOperator3D {
  
    constructor(localOrigin) {
        super(localOrigin)
        	this.Scale2 = null  // optional
	this.Scale3 = null  // optional

    Object.defineProperty(this, 'Scl2', {
        get: () => {throw "Derived property logic has not been implemented for Scl2."}, // derived
        set: (value) => {this.Scl2 = value}
    })

    Object.defineProperty(this, 'Scl3', {
        get: () => {throw "Derived property logic has not been implemented for Scl3."}, // derived
        set: (value) => {this.Scl3 = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))
		parameters.push(BaseIfc.toStepValue(this.Axis3))
		parameters.push(BaseIfc.toStepValue(this.Scale2))
		parameters.push(BaseIfc.toStepValue(this.Scale3))

        return parameters.join()
    }
}