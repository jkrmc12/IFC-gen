
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianPointList = require('./IfcCartesianPointList')
const IfcArcIndex = require('./IfcArcIndex')
const IfcLineIndex = require('./IfcLineIndex')
const IfcBoolean = require('./IfcBoolean')
const IfcBoundedCurve = require('./IfcBoundedCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolycurve.htm
 */
module.exports = class IfcIndexedPolyCurve extends IfcBoundedCurve {
  
    constructor(points) {
        super()
		this.Points = points

        	this.Segments = null  // optional
	this.SelfIntersect = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Points))
		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join()
    }
}