
const BaseIfc = require('./BaseIfc')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontpattern.htm
 */
module.exports = class IfcCurveStyleFontPattern extends IfcPresentationItem {
  
    constructor(visibleSegmentLength, invisibleSegmentLength) {
        super()
		this.VisibleSegmentLength = visibleSegmentLength
		this.InvisibleSegmentLength = invisibleSegmentLength

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.VisibleSegmentLength))
		parameters.push(BaseIfc.toStepValue(this.InvisibleSegmentLength))

        return parameters.join()
    }
}