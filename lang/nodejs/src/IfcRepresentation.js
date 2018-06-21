
const BaseIfc = require('./BaseIfc')
const IfcRepresentationContext = require('./IfcRepresentationContext')
const IfcLabel = require('./IfcLabel')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcProductRepresentation = require('./IfcProductRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentation.htm
 */
module.exports = class IfcRepresentation extends BaseIfc {
  
    constructor(contextOfItems, items) {
        super()
		this.ContextOfItems = contextOfItems
		this.Items = items

        	this.RepresentationIdentifier = null  // optional
	this.RepresentationType = null  // optional
	this.RepresentationMap = null  // inverse
	this.LayerAssignments = null  // inverse
	this.OfProductRepresentation = null  // inverse

    }
}