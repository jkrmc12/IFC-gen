
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcCurveStyleFontPattern = require('./IfcCurveStyleFontPattern')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefont.htm
 */
module.exports = class IfcCurveStyleFont extends IfcPresentationItem {
  
    constructor(patternList) {
        super()
		this.PatternList = patternList

        	this.Name = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.PatternList))

        return parameters.join()
    }
}