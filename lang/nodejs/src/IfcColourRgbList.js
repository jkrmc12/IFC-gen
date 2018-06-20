
const BaseIfc = require('./BaseIfc')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgblist.htm
 */
module.exports = class IfcColourRgbList extends IfcPresentationItem {
  
    constructor(colourList) {
        super()
		this.ColourList = colourList

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ColourList))

        return parameters.join()
    }
}