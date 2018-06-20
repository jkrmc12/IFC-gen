
const BaseIfc = require('./BaseIfc')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm
 */
module.exports = class IfcUnitAssignment extends BaseIfc {
  
    constructor(units) {
        super()
		this.Units = units

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Units))

        return parameters.join()
    }
}