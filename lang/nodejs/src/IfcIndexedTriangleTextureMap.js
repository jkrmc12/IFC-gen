
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcTessellatedFaceSet = require('./IfcTessellatedFaceSet')
const IfcTextureVertexList = require('./IfcTextureVertexList')
const IfcPositiveInteger = require('./IfcPositiveInteger')
const IfcIndexedTextureMap = require('./IfcIndexedTextureMap')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtriangletexturemap.htm
 */
module.exports = class IfcIndexedTriangleTextureMap extends IfcIndexedTextureMap {
  
    constructor(maps, mappedTo, texCoords) {
        super(maps,mappedTo,texCoords)
        	this.TexCoordIndex = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.MappedTo))
		parameters.push(BaseIfc.toStepValue(this.TexCoords))
		parameters.push(BaseIfc.toStepValue(this.TexCoordIndex))

        return parameters.join()
    }
}