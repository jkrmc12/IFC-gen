
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcParameterValue = require('./IfcParameterValue')
const IfcSweptDiskSolid = require('./IfcSweptDiskSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolidpolygonal.htm
 */
module.exports = class IfcSweptDiskSolidPolygonal extends IfcSweptDiskSolid {
  
    constructor(directrix, radius) {
        super(directrix,radius)
        	this.FilletRadius = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Directrix))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.InnerRadius))
		parameters.push(BaseIfc.toStepValue(this.StartParam))
		parameters.push(BaseIfc.toStepValue(this.EndParam))
		parameters.push(BaseIfc.toStepValue(this.FilletRadius))

        return parameters.join()
    }
}