/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
	/// </summary>
	internal  partial class BoundaryEdgeCondition : BoundaryCondition 
	{
		public BoundaryEdgeConditionTranslationalStiffnessByLengthX TranslationalStiffnessByLengthX {get;set;}

		public BoundaryEdgeConditionTranslationalStiffnessByLengthY TranslationalStiffnessByLengthY {get;set;}

		public BoundaryEdgeConditionTranslationalStiffnessByLengthZ TranslationalStiffnessByLengthZ {get;set;}

		public BoundaryEdgeConditionRotationalStiffnessByLengthX RotationalStiffnessByLengthX {get;set;}

		public BoundaryEdgeConditionRotationalStiffnessByLengthY RotationalStiffnessByLengthY {get;set;}

		public BoundaryEdgeConditionRotationalStiffnessByLengthZ RotationalStiffnessByLengthZ {get;set;}

		public BoundaryEdgeCondition(BoundaryEdgeConditionTranslationalStiffnessByLengthX translationalStiffnessByLengthX,
				BoundaryEdgeConditionTranslationalStiffnessByLengthY translationalStiffnessByLengthY,
				BoundaryEdgeConditionTranslationalStiffnessByLengthZ translationalStiffnessByLengthZ,
				BoundaryEdgeConditionRotationalStiffnessByLengthX rotationalStiffnessByLengthX,
				BoundaryEdgeConditionRotationalStiffnessByLengthY rotationalStiffnessByLengthY,
				BoundaryEdgeConditionRotationalStiffnessByLengthZ rotationalStiffnessByLengthZ,
				String name) : base(name)
		{
			this.TranslationalStiffnessByLengthX = translationalStiffnessByLengthX;
			this.TranslationalStiffnessByLengthY = translationalStiffnessByLengthY;
			this.TranslationalStiffnessByLengthZ = translationalStiffnessByLengthZ;
			this.RotationalStiffnessByLengthX = rotationalStiffnessByLengthX;
			this.RotationalStiffnessByLengthY = rotationalStiffnessByLengthY;
			this.RotationalStiffnessByLengthZ = rotationalStiffnessByLengthZ;
		}
	}
}