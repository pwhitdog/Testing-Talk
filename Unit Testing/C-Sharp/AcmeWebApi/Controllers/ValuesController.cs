using System.Collections.Generic;
using AcmeWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace AcmeWebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ValuesController : ControllerBase
	{
		private readonly IValuesService _valuesService;

		public ValuesController(IValuesService valuesService)
		{
			_valuesService = valuesService;
		}

		// GET api/values
		[HttpGet]
		public ActionResult<IEnumerable<string>> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			return "value";
		}

		// POST api/values
		[HttpPost]
		public string PigLatinWord([FromBody] string word)
		{
			return _valuesService.PigLatinWord(word);
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
