
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcCurve = require('./IfcCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm
 */
module.exports = class IfcConic extends IfcCurve {
  
    constructor(position) {
        super()
		this.Position = position

        
    }
}