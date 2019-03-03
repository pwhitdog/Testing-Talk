using System;
using System.Collections.Generic;

namespace AcmeWebApi.Services
{
	public class ValuesService : IValuesService
	{
		public string PigLatinPhrase(string[] words)
		{
			throw new NotImplementedException();
		}

		public string PigLatinWord(string word)
		{

			if (OnlyConstanant(word[0].ToString()))
			{
				var tmpLetters = word.Substring(0, 2);

				word = OnlyConstanant(tmpLetters)
					? word.Substring(2) + tmpLetters
					: word.Substring(1) + tmpLetters.Substring(0, 1);

				word = PigLatinWord(word) + "ay";
			}

			return word;
		}

		private bool OnlyConstanant(string subString)
		{
			var vowels = new List<string> { "A", "E", "I", "O", "U" };
			foreach(char c in subString)
			{
				if (vowels.Contains(c.ToString().ToUpper()))
				{
					return false;
				}
			}
			return true;
		}

	}
}
