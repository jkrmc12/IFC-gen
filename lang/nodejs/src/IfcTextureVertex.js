
const BaseIfc = require('./BaseIfc')
const IfcParameterValue = require('./IfcParameterValue')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm
 */
module.exports = class IfcTextureVertex extends IfcPresentationItem {
  
    constructor(coordinates) {
        super()
		this.Coordinates = coordinates

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Coordinates))

        return parameters.join()
    }
}