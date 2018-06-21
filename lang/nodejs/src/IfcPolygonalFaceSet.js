
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPointList3D = require('./IfcCartesianPointList3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcIndexedColourMap = require('./IfcIndexedColourMap')
const IfcIndexedTextureMap = require('./IfcIndexedTextureMap')
const IfcBoolean = require('./IfcBoolean')
const IfcIndexedPolygonalFace = require('./IfcIndexedPolygonalFace')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalfaceset.htm
 */
module.exports = class IfcPolygonalFaceSet extends IfcTessellatedFaceSet {
  
    constructor(coordinates, faces) {
        super(coordinates)
		this.Faces = faces

        	this.Closed = null  // optional
	this.PnIndex = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Coordinates))
		parameters.push(BaseIfc.toStepValue(this.Closed))
		parameters.push(BaseIfc.toStepValue(this.Faces))
		parameters.push(BaseIfc.toStepValue(this.PnIndex))

        return parameters.join()
    }
}