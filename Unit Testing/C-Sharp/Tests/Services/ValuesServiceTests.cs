using AcmeWebApi.Services;
using Xunit;

namespace Tests.Services
{
	public class ValuesServiceTests
	{
		[Fact]
		public void PigLatinWordShouldTakeASingleStartingConsonant()
		{
			// Arrange
			var service = new ValuesService();

			// Act
			var word = service.PigLatinWord("test");

			// Assert
			Assert.Equal("esttay", word);
		}

		[Fact]
		public void PigLatinWordShouldTakeAConsonantCluster()
		{
			// Arrange
			var service = new ValuesService();

			// Act
			var word = service.PigLatinWord("trash");

			// Assert
			Assert.Equal("ashtray", word);
		}
	}
}
