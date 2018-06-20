
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetaryunit.htm
 */
module.exports = class IfcMonetaryUnit extends BaseIfc {
  
    constructor(currency) {
        super()
		this.Currency = currency

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Currency))

        return parameters.join()
    }
}