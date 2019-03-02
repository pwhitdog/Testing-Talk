namespace AcmeWebApi.Services
{
	public interface IValuesService
	{
		string PigLatinWord(string word);
		string PigLatinPhrase(string[] words);
	}
}
