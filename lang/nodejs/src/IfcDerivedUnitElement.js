
const BaseIfc = require('./BaseIfc')
const IfcNamedUnit = require('./IfcNamedUnit')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedunitelement.htm
 */
module.exports = class IfcDerivedUnitElement extends BaseIfc {
  
    constructor(unit, exponent) {
        super()
		this.Unit = unit
		this.Exponent = exponent

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.Exponent))

        return parameters.join()
    }
}