
const BaseIfc = require('./BaseIfc')
const IfcReal = require('./IfcReal')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerefraction.htm
 */
module.exports = class IfcSurfaceStyleRefraction extends IfcPresentationItem {
  
    constructor() {
        super()
        	this.RefractionIndex = null  // optional
	this.DispersionFactor = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.RefractionIndex))
		parameters.push(BaseIfc.toStepValue(this.DispersionFactor))

        return parameters.join()
    }
}