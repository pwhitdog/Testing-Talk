using AcmeWebApi.Controllers;
using AcmeWebApi.Services;
using Moq;
using Xunit;

namespace Tests.Controllers
{
	public class ValuesControllerTests
	{
		private IValuesService _valuesService;

		public ValuesControllerTests()
		{
			_valuesService = new ValuesService();
		}

		[Fact]
		public void PigLatinWordShouldCallServiceOnce()
		{
			// Arrange
			var mock = new Mock<IValuesService>();
			mock.Setup(service => service.PigLatinWord(It.IsAny<string>())).Returns("Test");
			var controller = new ValuesController(mock.Object);

			// Act
			var result = controller.PigLatinWord("Where");

			// Assert
			mock.Verify(service => service.PigLatinWord("Where"), Times.AtLeastOnce());
		}
	}
}
