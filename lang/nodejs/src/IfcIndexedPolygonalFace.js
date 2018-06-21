
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcPolygonalFaceSet = require('./IfcPolygonalFaceSet')
const IfcTessellatedItem = require('./IfcTessellatedItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalface.htm
 */
module.exports = class IfcIndexedPolygonalFace extends IfcTessellatedItem {
  
    constructor(coordIndex) {
        super()
		this.CoordIndex = coordIndex

        	this.ToFaceSet = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CoordIndex))

        return parameters.join()
    }
}