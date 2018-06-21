
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcBooleanResult = require('./IfcBooleanResult')
const IfcCsgPrimitive3D = require('./IfcCsgPrimitive3D')
const IfcSolidModel = require('./IfcSolidModel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgsolid.htm
 */
module.exports = class IfcCsgSolid extends IfcSolidModel {
  
    constructor(treeRootExpression) {
        super()
		this.TreeRootExpression = treeRootExpression

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TreeRootExpression))

        return parameters.join()
    }
}