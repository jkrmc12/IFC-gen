
const BaseIfc = require('./BaseIfc')
const IfcBoolean = require('./IfcBoolean')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')
const IfcSurfaceStyleWithTextures = require('./IfcSurfaceStyleWithTextures')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacetexture.htm
 */
module.exports = class IfcSurfaceTexture extends IfcPresentationItem {
  
    constructor(repeatS, repeatT) {
        super()
		this.RepeatS = repeatS
		this.RepeatT = repeatT

        	this.Mode = null  // optional
	this.TextureTransform = null  // optional
	this.Parameter = null  // optional
	this.IsMappedBy = null  // inverse
	this.UsedInStyles = null  // inverse

    }
}