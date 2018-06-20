
const BaseIfc = require('./BaseIfc')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcColourRgbList = require('./IfcColourRgbList')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedcolourmap.htm
 */
module.exports = class IfcIndexedColourMap extends IfcPresentationItem {
  
    constructor(mappedTo, colours, colourIndex) {
        super()
		this.MappedTo = mappedTo
		this.Colours = colours
		this.ColourIndex = colourIndex

        	this.Opacity = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MappedTo))
		parameters.push(BaseIfc.toStepValue(this.Opacity))
		parameters.push(BaseIfc.toStepValue(this.Colours))
		parameters.push(BaseIfc.toStepValue(this.ColourIndex))

        return parameters.join()
    }
}