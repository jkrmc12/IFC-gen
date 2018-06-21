
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcFaceBound = require('./IfcFaceBound')
const IfcTextureMap = require('./IfcTextureMap')
const IfcSurface = require('./IfcSurface')
const IfcBoolean = require('./IfcBoolean')
const IfcFaceSurface = require('./IfcFaceSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedface.htm
 */
module.exports = class IfcAdvancedFace extends IfcFaceSurface {
  
    constructor(bounds, faceSurface, sameSense) {
        super(bounds,faceSurface,sameSense)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Bounds))
		parameters.push(BaseIfc.toStepValue(this.FaceSurface))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

        return parameters.join()
    }
}