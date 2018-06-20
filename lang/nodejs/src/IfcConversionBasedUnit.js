
const BaseIfc = require('./BaseIfc')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcUnitEnum = require('./IfcUnitEnum')
const IfcLabel = require('./IfcLabel')
const IfcMeasureWithUnit = require('./IfcMeasureWithUnit')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcNamedUnit = require('./IfcNamedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunit.htm
 */
module.exports = class IfcConversionBasedUnit extends IfcNamedUnit {
  
    constructor(dimensions, unitType, name, conversionFactor) {
        super(dimensions,unitType)
		this.Name = name
		this.ConversionFactor = conversionFactor

        	this.HasExternalReference = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ConversionFactor))

        return parameters.join()
    }
}