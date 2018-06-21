
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPointList3D = require('./IfcCartesianPointList3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcIndexedColourMap = require('./IfcIndexedColourMap')
const IfcIndexedTextureMap = require('./IfcIndexedTextureMap')
const IfcParameterValue = require('./IfcParameterValue')
const IfcBoolean = require('./IfcBoolean')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcInteger = require('./IfcInteger')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctriangulatedfaceset.htm
 */
module.exports = class IfcTriangulatedFaceSet extends IfcTessellatedFaceSet {
  
    constructor(coordinates, coordIndex) {
        super(coordinates)
		this.CoordIndex = coordIndex

        	this.Normals = null  // optional
	this.Closed = null  // optional
	this.PnIndex = null  // optional

    Object.defineProperty(this, 'NumberOfTriangles', {
        get: () => {throw "Derived property logic has not been implemented for NumberOfTriangles."}, // derived
        set: (value) => {this.NumberOfTriangles = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Coordinates))
		parameters.push(BaseIfc.toStepValue(this.Normals))
		parameters.push(BaseIfc.toStepValue(this.Closed))
		parameters.push(BaseIfc.toStepValue(this.CoordIndex))
		parameters.push(BaseIfc.toStepValue(this.PnIndex))

        return parameters.join()
    }
}