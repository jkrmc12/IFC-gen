
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcCartesianPointList = require('./IfcCartesianPointList')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist2d.htm
 */
module.exports = class IfcCartesianPointList2D extends IfcCartesianPointList {
  
    constructor(coordList) {
        super()
		this.CoordList = coordList

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CoordList))

        return parameters.join()
    }
}