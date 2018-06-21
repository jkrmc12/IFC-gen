
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVector = require('./IfcVector')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyletiles.htm
 */
module.exports = class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem {
  
    constructor(tilingPattern, tiles, tilingScale) {
        super()
		this.TilingPattern = tilingPattern
		this.Tiles = tiles
		this.TilingScale = tilingScale

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TilingPattern))
		parameters.push(BaseIfc.toStepValue(this.Tiles))
		parameters.push(BaseIfc.toStepValue(this.TilingScale))

        return parameters.join()
    }
}