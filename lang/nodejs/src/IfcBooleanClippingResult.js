
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcBooleanOperator = require('./IfcBooleanOperator')
const IfcBooleanResult = require('./IfcBooleanResult')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')
const IfcHalfSpaceSolid = require('./IfcHalfSpaceSolid')
const IfcSolidModel = require('./IfcSolidModel')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')
const IfcDimensionCount = require('./IfcDimensionCount')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanclippingresult.htm
 */
module.exports = class IfcBooleanClippingResult extends IfcBooleanResult {
  
    constructor(op, firstOperand, secondOperand) {
        super(op,firstOperand,secondOperand)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Operator))
		parameters.push(BaseIfc.toStepValue(this.FirstOperand))
		parameters.push(BaseIfc.toStepValue(this.SecondOperand))

        return parameters.join()
    }
}