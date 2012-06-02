# Installation
1. [Install Selenium](http://seleniumhq.org/) in Firefox
1. Open Selenium in Firefox by clicking *Tools > Selenium IDE*
1. With the Selenium IDE window open, click *Options > Options*

1. Add the full path to lipsumtext.js in the *Selenium Core extensions* field

	TIP: You can specify multiple extensions. Simply separate each path with a comma.  
1. Test
    
# Usage
To use this extension you'll be creating a command that will set a variable. You can then use this variable later by other commands.

You can create a new command using either of these methods:

1. right-click in the white *table* box within the Selenium IDE main window and choose *Insert New Command*.
1. use the Selenium main menu: click *Edit > Insert New Command*

Here are some examples of setting a variable:

<table>
	<tr>
		<td>Command</td>
		<td>Target</td>
		<td>Value</td>
		<td>(result)</td>
	</tr>
	<tr>
		<td>lipsumText</td>
		<td>20 words</td>
		<td>x</td>
		<td>20 words; entire string starts with capital letter and ends with period; string may contain additional punctuation</td>
	</tr>
	<tr>
		<td>lipsumText</td>
		<td>1 paragraph</td>
		<td>x</td>
		<td>1 paragraphs of 15 to 300 words; paragraph starts with capital letter and ends with period; paragraph may contain additional punctuation</td>
	</tr>
	<tr>
		<td>lipsumText</td>
		<td>3 paragraphs</td>
		<td>x</td>
		<td>3 paragraphs of 15 to 300 words each; each paragraph starts with capital letter and ends with period; paragraphs may contain additional punctuation</td>
	</tr>
	<tr>
		<td>lipsumText</td>
		<td>5 paragraphs|htmltags</td>
		<td>x</td>
		<td>5 paragraphs of 15 to 300 words each; paragraphs are wrapped in &lt;p&gt; tags; each paragraph starts with capital letter and ends with period; paragraphs may contain additional punctuation</td>
	</tr>
</table>

Here is an example of using the variable we created above to insert the lorem ipsum text into a text field:

<table>
	<tr>
		<td>Command</td>
		<td>Target</td>
		<td>Value</td>
	</tr>
	<tr>
		<td>type</td>
		<td>id=my-edit-field-value</td>
		<td>${x}</td>
	</tr>
</table>

# Future Improvements
- add 'wordcaps' option to capitalize all words (useful for titles)
- add 'nomarks' option to remove all punctuation remarks (useful for titles)
- make count and type easier. e.g., "5 paragraphs" or "1 word"

    This will give us more flexibility for additional variables.
