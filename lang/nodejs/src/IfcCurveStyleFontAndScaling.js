
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcCurveStyleFont = require('./IfcCurveStyleFont')
const IfcPreDefinedCurveFont = require('./IfcPreDefinedCurveFont')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm
 */
module.exports = class IfcCurveStyleFontAndScaling extends IfcPresentationItem {
  
    constructor(curveFont, curveFontScaling) {
        super()
		this.CurveFont = curveFont
		this.CurveFontScaling = curveFontScaling

        	this.Name = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.CurveFont))
		parameters.push(BaseIfc.toStepValue(this.CurveFontScaling))

        return parameters.join()
    }
}