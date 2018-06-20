
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelAssigns = require('./IfcRelAssigns')
const IfcRelNests = require('./IfcRelNests')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAggregates = require('./IfcRelAggregates')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcRelDefinesByObject = require('./IfcRelDefinesByObject')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelFillsElement = require('./IfcRelFillsElement')
const IfcRelConnectsElements = require('./IfcRelConnectsElements')
const IfcRelInterferesElements = require('./IfcRelInterferesElements')
const IfcRelProjectsElement = require('./IfcRelProjectsElement')
const IfcRelReferencedInSpatialStructure = require('./IfcRelReferencedInSpatialStructure')
const IfcRelVoidsElement = require('./IfcRelVoidsElement')
const IfcRelConnectsWithRealizingElements = require('./IfcRelConnectsWithRealizingElements')
const IfcRelSpaceBoundary = require('./IfcRelSpaceBoundary')
const IfcRelContainedInSpatialStructure = require('./IfcRelContainedInSpatialStructure')
const IfcRelCoversBldgElements = require('./IfcRelCoversBldgElements')
const IfcProduct = require('./IfcProduct')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelement.htm
 */
module.exports = class IfcElement extends IfcProduct {
  
    constructor(globalId) {
        super(globalId)
        	this.Tag = null  // optional
	this.FillsVoids = null  // inverse
	this.ConnectedTo = null  // inverse
	this.IsInterferedByElements = null  // inverse
	this.InterferesElements = null  // inverse
	this.HasProjections = null  // inverse
	this.ReferencedInStructures = null  // inverse
	this.HasOpenings = null  // inverse
	this.IsConnectionRealization = null  // inverse
	this.ProvidesBoundaries = null  // inverse
	this.ConnectedFrom = null  // inverse
	this.ContainedInStructure = null  // inverse
	this.HasCoverings = null  // inverse

    }
}