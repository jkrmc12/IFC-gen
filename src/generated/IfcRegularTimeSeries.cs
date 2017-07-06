/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcRegularTimeSeries : IfcTimeSeries 
	{
		public IfcRegularTimeSeries(IfcRegularTimeSeriesValues values,
				Double timeStep,
				Boolean timeStepSpecified,
				IfcTimeSeriesUnit unit,
				String name,
				String description,
				String startTime,
				String endTime,
				IfcTimeSeriesDataTypeEnum timeSeriesDataType,
				Boolean timeSeriesDataTypeSpecified,
				IfcDataOriginEnum dataOrigin,
				Boolean dataOriginSpecified,
				String userDefinedDataOrigin) : base(unit,
				name,
				description,
				startTime,
				endTime,
				timeSeriesDataType,
				timeSeriesDataTypeSpecified,
				dataOrigin,
				dataOriginSpecified,
				userDefinedDataOrigin)
		{
			this.Values = values;
			this.TimeStep = timeStep;
			this.TimeStepSpecified = timeStepSpecified;
		}
	}
}