
const BaseIfc = require('./BaseIfc')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcUnitEnum = require('./IfcUnitEnum')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnamedunit.htm
 */
module.exports = class IfcNamedUnit extends BaseIfc {
  
    constructor(dimensions, unitType) {
        super()
		this.Dimensions = dimensions
		this.UnitType = unitType

        
    }
}