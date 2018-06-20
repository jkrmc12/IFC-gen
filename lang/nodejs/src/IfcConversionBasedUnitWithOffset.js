
const BaseIfc = require('./BaseIfc')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcUnitEnum = require('./IfcUnitEnum')
const IfcLabel = require('./IfcLabel')
const IfcMeasureWithUnit = require('./IfcMeasureWithUnit')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcReal = require('./IfcReal')
const IfcConversionBasedUnit = require('./IfcConversionBasedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconversionbasedunitwithoffset.htm
 */
module.exports = class IfcConversionBasedUnitWithOffset extends IfcConversionBasedUnit {
  
    constructor(dimensions, unitType, name, conversionFactor, conversionOffset) {
        super(dimensions,unitType,name,conversionFactor)
		this.ConversionOffset = conversionOffset

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ConversionFactor))
		parameters.push(BaseIfc.toStepValue(this.ConversionOffset))

        return parameters.join()
    }
}