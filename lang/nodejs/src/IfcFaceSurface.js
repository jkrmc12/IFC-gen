
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcFaceBound = require('./IfcFaceBound')
const IfcTextureMap = require('./IfcTextureMap')
const IfcSurface = require('./IfcSurface')
const IfcBoolean = require('./IfcBoolean')
const IfcFace = require('./IfcFace')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm
 */
module.exports = class IfcFaceSurface extends IfcFace {
  
    constructor(bounds, faceSurface, sameSense) {
        super(bounds)
		this.FaceSurface = faceSurface
		this.SameSense = sameSense

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Bounds))
		parameters.push(BaseIfc.toStepValue(this.FaceSurface))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

        return parameters.join()
    }
}