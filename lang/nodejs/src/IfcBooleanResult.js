
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcBooleanOperator = require('./IfcBooleanOperator')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')
const IfcHalfSpaceSolid = require('./IfcHalfSpaceSolid')
const IfcSolidModel = require('./IfcSolidModel')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbooleanresult.htm
 */
module.exports = class IfcBooleanResult extends IfcGeometricRepresentationItem {
  
    constructor(op, firstOperand, secondOperand) {
        super()
		this.Operator = op
		this.FirstOperand = firstOperand
		this.SecondOperand = secondOperand

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Operator))
		parameters.push(BaseIfc.toStepValue(this.FirstOperand))
		parameters.push(BaseIfc.toStepValue(this.SecondOperand))

        return parameters.join()
    }
}