using UnitTesting_C_Sharp;
using Xunit;

namespace Tests
{
	public class CalculatorTests
	{
		[Fact]
		public void ShouldBeAbleToAddToFloatsTogether()
		{
			// Arrange
			var x = 1;
			var y = 2;
			// Act
			var calc = new Calculator();
			var result = calc.Add(x, y);
			// Assert
			Assert.Equal(3, result);
		}
	}
}
