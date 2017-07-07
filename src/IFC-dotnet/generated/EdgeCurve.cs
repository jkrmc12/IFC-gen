/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgecurve.htm
	/// </summary>
	internal  partial class EdgeCurve : Edge 
	{
		public Curve EdgeGeometry {get;set;}

		public Boolean SameSense {get;set;}

		public EdgeCurve(Curve edgeGeometry,
				Boolean sameSense,
				Vertex edgeStart,
				Vertex edgeEnd,
				StyledItem styledByItem) : base(edgeStart,
				edgeEnd,
				styledByItem)
		{
			this.EdgeGeometry = edgeGeometry;
			this.SameSense = sameSense;
		}
	}
}