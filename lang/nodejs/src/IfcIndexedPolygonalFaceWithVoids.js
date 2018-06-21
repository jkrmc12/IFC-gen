
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcPolygonalFaceSet = require('./IfcPolygonalFaceSet')
const IfcIndexedPolygonalFace = require('./IfcIndexedPolygonalFace')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalfacewithvoids.htm
 */
module.exports = class IfcIndexedPolygonalFaceWithVoids extends IfcIndexedPolygonalFace {
  
    constructor(coordIndex, innerCoordIndices) {
        super(coordIndex)
		this.InnerCoordIndices = innerCoordIndices

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CoordIndex))
		parameters.push(BaseIfc.toStepValue(this.InnerCoordIndices))

        return parameters.join()
    }
}