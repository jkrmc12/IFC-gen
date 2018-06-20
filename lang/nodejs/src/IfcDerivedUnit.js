
const BaseIfc = require('./BaseIfc')
const IfcDerivedUnitElement = require('./IfcDerivedUnitElement')
const IfcDerivedUnitEnum = require('./IfcDerivedUnitEnum')
const IfcLabel = require('./IfcLabel')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunit.htm
 */
module.exports = class IfcDerivedUnit extends BaseIfc {
  
    constructor(elements, unitType) {
        super()
		this.Elements = elements
		this.UnitType = unitType

        	this.UserDefinedType = null  // optional

    Object.defineProperty(this, 'Dimensions', {
        get: () => {throw "Derived property logic has not been implemented for Dimensions."}, // derived
        set: (value) => {this.Dimensions = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Elements))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedType))

        return parameters.join()
    }
}