Selenium.prototype.doLipsumText = function (options, varName) {
    var length = 5, type = "words", useHtmlTags = false, opts = options.split("|"), i = 0;
    for (i = 0; i < 3; i += 1) {
        if (opts[i] && opts[i].match(/^\d+$/)) {
            length = opts[i];
        }

        if (opts[i] && opts[i].match(/^(words|paragraphs)$/)) {
            type = opts[i];
        }

        if (opts[i] && opts[i].match(/^(htmltags)$/)) {
            useHtmlTags = true;
        }
    }

    switch (type) {
    case "paragraphs":
        storedVars[varName] = lipsumParagraphs(length, useHtmlTags);
        break;
    case "words":
        storedVars[varName] = lipsumWords(length);
        break;
    default:
        storedVars[varName] = lipsumWords(length);
    }
}

/*
 Returns paragraphs of words
*/
function lipsumParagraphs(length, useHtmlTags) {
    var output = "", i = 0;
    for (i = 0; i < length; i += 1) {
        if (i > 0 && useHtmlTags === false) {
            output += "\r\r";
        }

        if (useHtmlTags === true) {
            output += "<p>" + getWords() + "</p>";
        } else {
            output += getWords();
        }
    }

    return output;
}

/*
 Returns an exact number of words
*/
function lipsumWords(length) {
    // Return an exact number of words
    return getWords(length, length);
}

/*
 Returns a string of lorem ipsum words
 
 @author C. Peter Chen (wrote original script at http://dev-notes.com/code.php?q=37)
 @author Adam Courtemanche of http://agileadam.com (modified code for use in Selenium lipsumtext extension)
*/
function getWords(minWordCount, maxWordCount) {
    minWordCount = minWordCount || 15;
    maxWordCount = maxWordCount || 300;

    var loremIpsumWordBank = new Array("lorem","ipsum","dolor","sit","amet,","consectetur","adipisicing","elit,","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua.","enim","ad","minim","veniam,","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat.","duis","aute","irure","dolor","in","reprehenderit","in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur.","excepteur","sint","occaecat","cupidatat","non","proident,","sunt","in","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum.","sed","ut","perspiciatis,","unde","omnis","iste","natus","error","sit","voluptatem","accusantium","doloremque","laudantium,","totam","rem","aperiam","eaque","ipsa,","quae","ab","illo","inventore","veritatis","et","quasi","architecto","beatae","vitae","dicta","sunt,","explicabo.","nemo","enim","ipsam","voluptatem,","quia","voluptas","sit,","aspernatur","aut","odit","aut","fugit,","sed","quia","consequuntur","magni","dolores","eos,","qui","ratione","voluptatem","sequi","nesciunt,","neque","porro","quisquam","est,","qui","dolorem","ipsum,","quia","dolor","sit,","amet,","consectetur,","adipisci","velit,","sed","quia","non","numquam","eius","modi","tempora","incidunt,","ut","labore","et","dolore","magnam","aliquam","quaerat","voluptatem.","ut","enim","ad","minima","veniam,","quis","nostrum","exercitationem","ullam","corporis","suscipit","laboriosam,","nisi","ut","aliquid","ex","ea","commodi","consequatur?","quis","autem","vel","eum","iure","reprehenderit,","qui","in","ea","voluptate","velit","esse,","quam","nihil","molestiae","consequatur,","vel","illum,","qui","dolorem","eum","fugiat,","quo","voluptas","nulla","pariatur?","at","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus,","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti,","quos","dolores","et","quas","molestias","excepturi","sint,","obcaecati","cupiditate","non","provident,","similique","sunt","in","culpa,","qui","officia","deserunt","mollitia","animi,","id","est","laborum","et","dolorum","fuga.","harum","quidem","rerum","facilis","est","et","expedita","distinctio.","Nam","libero","tempore,","cum","soluta","nobis","est","eligendi","optio,","cumque","nihil","impedit,","quo","minus","id,","quod","maxime","placeat,","facere","possimus,","omnis","voluptas","assumenda","est,","omnis","dolor","repellendus.","temporibus","autem","quibusdam","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet,","ut","et","voluptates","repudiandae","sint","molestiae","non","recusandae.","itaque","earum","rerum","hic","tenetur","a","sapiente","delectus,","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat");

    var randy = Math.floor(Math.random() * (maxWordCount - minWordCount)) + minWordCount;
    var ret = "", i = 0;
    for (i = 0; i < randy; i += 1) {
        var newTxt = loremIpsumWordBank[Math.floor(Math.random() * (loremIpsumWordBank.length - 1))];
        if (ret.substring(ret.length - 1, ret.length) === "." || ret.substring(ret.length - 1, ret.length) === "?") {
            newTxt = newTxt.substring(0, 1).toUpperCase() + newTxt.substring(1, newTxt.length);
        }

        ret += " " + newTxt;
    }

    // Remove beginning space
    ret = ret.replace(/(^[ ])/, "");

    // Remove end punctuation marks
    ret = ret.replace(/([.?, ]$)/gi, "");

    // Return the capitalized string, with a period at the end
    return ret.charAt(0).toUpperCase() + ret.slice(1) + ".";
}
