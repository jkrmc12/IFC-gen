
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcSurface = require('./IfcSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementarysurface.htm
 */
module.exports = class IfcElementarySurface extends IfcSurface {
  
    constructor(position) {
        super()
		this.Position = position

        
    }
}