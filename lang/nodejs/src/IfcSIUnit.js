
const BaseIfc = require('./BaseIfc')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcUnitEnum = require('./IfcUnitEnum')
const IfcSIPrefix = require('./IfcSIPrefix')
const IfcSIUnitName = require('./IfcSIUnitName')
const IfcNamedUnit = require('./IfcNamedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsiunit.htm
 */
module.exports = class IfcSIUnit extends IfcNamedUnit {
  
    constructor(dimensions, unitType, name) {
        super(dimensions,unitType)
		this.Name = name

        	this.Prefix = null  // optional

    Object.defineProperty(this, 'Dimensions', {
        get: () => {throw "Derived property logic has not been implemented for Dimensions."}, // derived
        set: (value) => {this.Dimensions = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Prefix))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}