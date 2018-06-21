
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDirection = require('./IfcDirection')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcReal = require('./IfcReal')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianTransformationOperator = require('./IfcCartesianTransformationOperator')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator3d.htm
 */
module.exports = class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator {
  
    constructor(localOrigin) {
        super(localOrigin)
        	this.Axis3 = null  // optional

    Object.defineProperty(this, 'U', {
        get: () => {throw "Derived property logic has not been implemented for U."}, // derived
        set: (value) => {this.U = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Axis1))
		parameters.push(BaseIfc.toStepValue(this.Axis2))
		parameters.push(BaseIfc.toStepValue(this.LocalOrigin))
		parameters.push(BaseIfc.toStepValue(this.Scale))
		parameters.push(BaseIfc.toStepValue(this.Axis3))

        return parameters.join()
    }
}