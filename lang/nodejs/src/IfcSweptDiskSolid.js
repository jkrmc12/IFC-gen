
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcParameterValue = require('./IfcParameterValue')
const IfcSolidModel = require('./IfcSolidModel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptdisksolid.htm
 */
module.exports = class IfcSweptDiskSolid extends IfcSolidModel {
  
    constructor(directrix, radius) {
        super()
		this.Directrix = directrix
		this.Radius = radius

        	this.InnerRadius = null  // optional
	this.StartParam = null  // optional
	this.EndParam = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Directrix))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.InnerRadius))
		parameters.push(BaseIfc.toStepValue(this.StartParam))
		parameters.push(BaseIfc.toStepValue(this.EndParam))

        return parameters.join()
    }
}