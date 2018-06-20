
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')
const IfcTextureVertexList = require('./IfcTextureVertexList')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtexturemap.htm
 */
module.exports = class IfcIndexedTextureMap extends IfcTextureCoordinate {
  
    constructor(maps, mappedTo, texCoords) {
        super(maps)
		this.MappedTo = mappedTo
		this.TexCoords = texCoords

        
    }
}