
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcClosedShell = require('./IfcClosedShell')
const IfcSolidModel = require('./IfcSolidModel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm
 */
module.exports = class IfcManifoldSolidBrep extends IfcSolidModel {
  
    constructor(outer) {
        super()
		this.Outer = outer

        
    }
}