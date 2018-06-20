
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDateTime = require('./IfcDateTime')
const IfcTimeSeriesDataTypeEnum = require('./IfcTimeSeriesDataTypeEnum')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseries.htm
 */
module.exports = class IfcTimeSeries extends BaseIfc {
  
    constructor(name, startTime, endTime, timeSeriesDataType, dataOrigin) {
        super()
		this.Name = name
		this.StartTime = startTime
		this.EndTime = endTime
		this.TimeSeriesDataType = timeSeriesDataType
		this.DataOrigin = dataOrigin

        	this.Description = null  // optional
	this.UserDefinedDataOrigin = null  // optional
	this.Unit = null  // optional
	this.HasExternalReference = null  // inverse

    }
}