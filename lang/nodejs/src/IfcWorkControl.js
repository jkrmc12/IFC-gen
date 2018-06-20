
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
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelAssignsToControl = require('./IfcRelAssignsToControl')
const IfcDateTime = require('./IfcDateTime')
const IfcPerson = require('./IfcPerson')
const IfcDuration = require('./IfcDuration')
const IfcControl = require('./IfcControl')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcontrol.htm
 */
module.exports = class IfcWorkControl extends IfcControl {
  
    constructor(globalId, creationDate, startTime) {
        super(globalId)
		this.CreationDate = creationDate
		this.StartTime = startTime

        	this.Creators = null  // optional
	this.Purpose = null  // optional
	this.Duration = null  // optional
	this.TotalFloat = null  // optional
	this.FinishTime = null  // optional

    }
}