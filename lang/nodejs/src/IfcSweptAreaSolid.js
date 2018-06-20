
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcSolidModel = require('./IfcSolidModel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm
 */
module.exports = class IfcSweptAreaSolid extends IfcSolidModel {
  
    constructor(sweptArea) {
        super()
		this.SweptArea = sweptArea

        	this.Position = null  // optional

    }
}