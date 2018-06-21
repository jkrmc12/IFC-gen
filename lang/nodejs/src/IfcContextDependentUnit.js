
const BaseIfc = require('./BaseIfc')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcUnitEnum = require('./IfcUnitEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcNamedUnit = require('./IfcNamedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontextdependentunit.htm
 */
module.exports = class IfcContextDependentUnit extends IfcNamedUnit {
  
    constructor(dimensions, unitType, name) {
        super(dimensions,unitType)
		this.Name = name

        	this.HasExternalReference = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Dimensions))
		parameters.push(BaseIfc.toStepValue(this.UnitType))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}