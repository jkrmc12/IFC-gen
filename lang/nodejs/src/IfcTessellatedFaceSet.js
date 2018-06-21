
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPointList3D = require('./IfcCartesianPointList3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcIndexedColourMap = require('./IfcIndexedColourMap')
const IfcIndexedTextureMap = require('./IfcIndexedTextureMap')
const IfcTessellatedItem = require('./IfcTessellatedItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellatedfaceset.htm
 */
module.exports = class IfcTessellatedFaceSet extends IfcTessellatedItem {
  
    constructor(coordinates) {
        super()
		this.Coordinates = coordinates

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })
	this.HasColours = null  // inverse
	this.HasTextures = null  // inverse

    }
}