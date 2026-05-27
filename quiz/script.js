const quizData = {
    html: [
        { q: "What does HTML stand for?", o: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], c: 0, e: "HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages." },
        { q: "Which HTML tag is used for the largest heading?", o: ["<h1>", "<h6>", "<heading>", "<head>"], c: 0, e: "<h1> is used for the largest heading, while <h6> is the smallest." },
        { q: "What is the correct HTML element for inserting a line break?", o: ["<br>", "<lb>", "<break>", "<newline>"], c: 0, e: "The <br> tag inserts a single line break in HTML." },
        { q: "Which character is used to indicate an end tag?", o: ["/", "\\", "<", "!"], c: 0, e: "The forward slash (/) is used before the tag name to indicate an end tag." },
        { q: "Which HTML attribute is used to define inline styles?", o: ["style", "styles", "class", "font"], c: 0, e: "The 'style' attribute is used to add inline CSS styles to HTML elements." },
        { q: "What is the correct HTML for creating a hyperlink?", o: ["<a href='url'>text</a>", "<link>url</link>", "<hyperlink>text</hyperlink>", "<url>text</url>"], c: 0, e: "The <a> tag with href attribute creates hyperlinks in HTML." },
        { q: "Which HTML element defines the title of a document?", o: ["<title>", "<head>", "<meta>", "<header>"], c: 0, e: "The <title> tag defines the title shown in browser tabs and search results." },
        { q: "What is the correct HTML element for the largest heading?", o: ["<h1>", "<heading>", "<h6>", "<head>"], c: 0, e: "<h1> creates the largest heading in HTML." },
        { q: "Which HTML tag is used to define an unordered list?", o: ["<ul>", "<ol>", "<list>", "<li>"], c: 0, e: "<ul> creates an unordered (bulleted) list." },
        { q: "What does the <meta> tag provide?", o: ["Metadata about the HTML document", "Main content", "Menu items", "Media files"], c: 0, e: "<meta> tags provide metadata like character encoding and viewport settings." },
        { q: "Which HTML element is used to specify a footer?", o: ["<footer>", "<bottom>", "<section>", "<end>"], c: 0, e: "The <footer> element represents the footer of a document or section." },
        { q: "What is the correct HTML for making a checkbox?", o: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input type='check'>"], c: 0, e: "<input type='checkbox'> creates a checkbox input field." },
        { q: "Which HTML element defines navigation links?", o: ["<nav>", "<navigate>", "<navigation>", "<menu>"], c: 0, e: "The <nav> element defines a section of navigation links." },
        { q: "What is the correct HTML for making a text input field?", o: ["<input type='text'>", "<textfield>", "<text>", "<input>"], c: 0, e: "<input type='text'> creates a single-line text input field." },
        { q: "Which HTML attribute specifies an alternate text for an image?", o: ["alt", "title", "src", "longdesc"], c: 0, e: "The 'alt' attribute provides alternative text for images when they cannot be displayed." },
        { q: "Which doctype is correct for HTML5?", o: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<DOCTYPE html>", "<!HTML5>"], c: 0, e: "<!DOCTYPE html> is the simple doctype declaration for HTML5." },
        { q: "Which HTML element is used to define important text?", o: ["<strong>", "<b>", "<important>", "<i>"], c: 0, e: "<strong> indicates important text with semantic meaning, typically displayed as bold." },
        { q: "Which HTML element defines emphasized text?", o: ["<em>", "<i>", "<italic>", "<emphasis>"], c: 0, e: "<em> defines emphasized text with semantic meaning, typically displayed as italic." },
        { q: "What is the correct HTML for inserting an image?", o: ["<img src='image.jpg' alt='Image'>", "<image src='image.jpg'>", "<img>image.jpg</img>", "<picture>image.jpg</picture>"], c: 0, e: "<img> with src and alt attributes is the correct way to insert images." },
        { q: "Which HTML element defines the main content of a document?", o: ["<main>", "<content>", "<article>", "<body>"], c: 0, e: "The <main> element represents the main content of the document." },
        { q: "What is the correct HTML for creating a text area?", o: ["<textarea>", "<input type='textarea'>", "<textbox>", "<text>"], c: 0, e: "<textarea> creates a multi-line text input field." },
        { q: "Which HTML tag is used for bold text without emphasis?", o: ["<b>", "<bold>", "<strong>", "<text>"], c: 0, e: "<b> makes text bold without semantic emphasis, while <strong> indicates importance." },
        { q: "What is the correct HTML for ordered list?", o: ["<ol>", "<ul>", "<list>", "<dl>"], c: 0, e: "<ol> creates an ordered (numbered) list." },
        { q: "Which HTML element is used to play video files?", o: ["<video>", "<movie>", "<media>", "<film>"], c: 0, e: "The <video> element embeds video content in HTML5." },
        { q: "What is the correct HTML for making a drop-down list?", o: ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"], c: 0, e: "<select> creates a drop-down list with <option> elements." },
        { q: "Which HTML element defines a table row?", o: ["<tr>", "<row>", "<td>", "<table-row>"], c: 0, e: "<tr> defines a table row containing table data cells." },
        { q: "Which HTML attribute is used to define the relationship between documents?", o: ["rel", "relationship", "type", "link"], c: 0, e: "The 'rel' attribute defines the relationship between the current document and the linked resource." },
        { q: "What is the correct HTML for inserting a background image?", o: ["Use CSS background-image property", "<background>image.jpg</background>", "<body bg='image.jpg'>", "<img background='image.jpg'>"], c: 0, e: "Background images are added using CSS, not HTML tags." },
        { q: "Which HTML element is used to define a table header?", o: ["<th>", "<thead>", "<header>", "<td>"], c: 0, e: "<th> defines a header cell in a table." },
        { q: "What is the correct HTML for creating a submit button?", o: ["<input type='submit'>", "<button type='submit'>", "<submit>", "Both A and B"], c: 3, e: "Both <input type='submit'> and <button type='submit'> create submit buttons." },
        { q: "Which HTML element is used to define a section?", o: ["<section>", "<div>", "<article>", "<part>"], c: 0, e: "<section> represents a standalone section of content." },
        { q: "What is the correct HTML for adding a comment?", o: ["<!-- comment -->", "// comment", "/* comment */", "' comment"], c: 0, e: "<!-- comment --> is the syntax for HTML comments." },
        { q: "Which input type is used for email validation?", o: ["email", "e-mail", "mail", "text"], c: 0, e: "<input type='email'> provides built-in email validation." },
        { q: "Which HTML element is used to define a clickable button?", o: ["<button>", "<btn>", "<click>", "<input type='button'>"], c: 0, e: "The <button> element creates a clickable button." },
        { q: "What is the purpose of the <canvas> element?", o: ["To draw graphics via JavaScript", "To create animations", "To display images", "To embed videos"], c: 0, e: "<canvas> provides a drawing surface for graphics via JavaScript." },
        { q: "Which HTML tag is used to define a description list?", o: ["<dl>", "<list>", "<desc>", "<ul>"], c: 0, e: "<dl> creates a description list with <dt> and <dd> elements." },
        { q: "What is the correct HTML for inserting an audio file?", o: ["<audio src='file.mp3'>", "<sound>file.mp3</sound>", "<mp3>file.mp3</mp3>", "<media>file.mp3</media>"], c: 0, e: "The <audio> element embeds audio content in HTML5." },
        { q: "Which attribute is used to specify that an input field must be filled?", o: ["required", "mandatory", "validate", "filled"], c: 0, e: "The 'required' attribute specifies that an input field must be filled before submitting." },
        { q: "What is the purpose of the <article> element?", o: ["Defines independent, self-contained content", "Defines article text", "Creates articles", "Formats articles"], c: 0, e: "The <article> element represents independent, self-contained content." },
        { q: "Which HTML element is used to define keyboard input?", o: ["<kbd>", "<keyboard>", "<key>", "<input>"], c: 0, e: "<kbd> represents keyboard input in HTML." },
        { q: "What is the correct HTML for creating a radio button?", o: ["<input type='radio'>", "<radio>", "<input type='button'>", "<button type='radio'>"], c: 0, e: "<input type='radio'> creates a radio button input." },
        { q: "Which HTML element defines sample output from a program?", o: ["<samp>", "<output>", "<code>", "<pre>"], c: 0, e: "<samp> represents sample output from a computer program." },
        { q: "What is the purpose of the <aside> element?", o: ["Defines content aside from main content", "Creates sidebars", "Defines additional info", "All of the above"], c: 3, e: "<aside> represents content tangentially related to the main content." },
        { q: "Which attribute specifies a unique id for an element?", o: ["id", "unique", "identifier", "name"], c: 0, e: "The 'id' attribute specifies a unique identifier for an HTML element." },
        { q: "What is the correct HTML for inserting a horizontal line?", o: ["<hr>", "<line>", "<horizontal>", "<hl>"], c: 0, e: "The <hr> tag creates a horizontal rule or line." },
        { q: "Which HTML element is used to define computer code?", o: ["<code>", "<pre>", "<program>", "<script>"], c: 0, e: "<code> represents a fragment of computer code." },
        { q: "What is the purpose of the <figure> element?", o: ["Groups media content with caption", "Creates figures", "Displays images", "Formats figures"], c: 0, e: "<figure> groups media content with its caption using <figcaption>." },
        { q: "Which attribute specifies the character encoding?", o: ["charset", "encoding", "char", "encode"], c: 0, e: "The 'charset' attribute in <meta> specifies the character encoding." },
        { q: "What is the correct HTML for creating a password field?", o: ["<input type='password'>", "<password>", "<input type='pass'>", "<pass>"], c: 0, e: "<input type='password'> creates a password input field that masks the input." },
        { q: "Which HTML element defines preformatted text?", o: ["<pre>", "<format>", "<text>", "<code>"], c: 0, e: "<pre> displays text in a fixed-width font and preserves spaces and line breaks." },
        { q: "What is the purpose of the <iframe> element?", o: ["Embeds another HTML page", "Creates frames", "Displays images", "Formats content"], c: 0, e: "<iframe> embeds another HTML document within the current page." },
        { q: "Which HTML tag defines a table caption?", o: ["<caption>", "<title>", "<heading>", "<th>"], c: 0, e: "<caption> defines a table caption directly after the <table> tag." },
        { q: "What is the correct HTML for making a number input?", o: ["<input type='number'>", "<number>", "<input type='num'>", "<num>"], c: 0, e: "<input type='number'> creates a number input field with increment buttons." },
        { q: "Which attribute is used to merge table cells horizontally?", o: ["colspan", "rowspan", "merge", "span"], c: 0, e: "The 'colspan' attribute merges table cells horizontally." },
        { q: "What is the purpose of the <header> element?", o: ["Defines header content or section", "Creates page headers", "Defines headings", "Formats headers"], c: 0, e: "<header> represents introductory content or navigational links." },
        { q: "Which HTML element represents a date/time?", o: ["<time>", "<date>", "<datetime>", "<timestamp>"], c: 0, e: "<time> represents a specific time or date." },
        { q: "What is the correct HTML for a range slider?", o: ["<input type='range'>", "<range>", "<slider>", "<input type='slider'>"], c: 0, e: "<input type='range'> creates a slider control." },
        { q: "Which attribute merges table cells vertically?", o: ["rowspan", "colspan", "merge", "span"], c: 0, e: "The 'rowspan' attribute merges table cells vertically." },
        { q: "What is the purpose of the <progress> element?", o: ["Displays progress of a task", "Creates progress bars", "Shows loading", "All of the above"], c: 3, e: "<progress> represents the completion progress of a task." },
        { q: "Which HTML element defines subscript text?", o: ["<sub>", "<subscript>", "<down>", "<lower>"], c: 0, e: "<sub> defines subscript text that appears below the baseline." },
        { q: "What is the correct HTML for a color picker?", o: ["<input type='color'>", "<color>", "<picker>", "<input type='picker'>"], c: 0, e: "<input type='color'> creates a color picker input." },
        { q: "Which HTML element defines superscript text?", o: ["<sup>", "<superscript>", "<up>", "<upper>"], c: 0, e: "<sup> defines superscript text that appears above the baseline." },
        { q: "What is the purpose of the <mark> element?", o: ["Highlights text", "Marks text", "Creates markers", "Formats text"], c: 0, e: "<mark> highlights or marks text for reference." },
        { q: "Which attribute specifies the target window for a link?", o: ["target", "window", "open", "link"], c: 0, e: "The 'target' attribute specifies where to open the linked document." },
        { q: "What is the correct HTML for a search input?", o: ["<input type='search'>", "<search>", "<input type='find'>", "<find>"], c: 0, e: "<input type='search'> creates a search input field." },
        { q: "Which HTML element defines a term in a description list?", o: ["<dt>", "<term>", "<dd>", "<def>"], c: 0, e: "<dt> defines a term in a description list." },
        { q: "What is the purpose of the <details> element?", o: ["Creates expandable content", "Shows details", "Displays information", "All of the above"], c: 3, e: "<details> creates a disclosure widget that can be toggled open/closed." },
        { q: "Which HTML element defines a definition in description list?", o: ["<dd>", "<def>", "<definition>", "<dt>"], c: 0, e: "<dd> defines the description/definition in a description list." },
        { q: "What is the correct HTML for a telephone input?", o: ["<input type='tel'>", "<tel>", "<phone>", "<input type='phone'>"], c: 0, e: "<input type='tel'> creates a telephone number input field." },
        { q: "Which attribute specifies placeholder text?", o: ["placeholder", "hint", "text", "value"], c: 0, e: "The 'placeholder' attribute provides hint text in input fields." },
        { q: "What is the purpose of the <summary> element?", o: ["Defines heading for <details>", "Creates summaries", "Shows summary", "Formats summary"], c: 0, e: "<summary> defines a visible heading for the <details> element." },
        { q: "Which HTML element represents a dialog box?", o: ["<dialog>", "<modal>", "<popup>", "<window>"], c: 0, e: "<dialog> represents a dialog box or interactive component." },
        { q: "What is the correct HTML for a URL input?", o: ["<input type='url'>", "<url>", "<link>", "<input type='link'>"], c: 0, e: "<input type='url'> creates a URL input field with validation." },
        { q: "Which attribute specifies whether input is editable?", o: ["contenteditable", "editable", "readonly", "disabled"], c: 0, e: "The 'contenteditable' attribute makes any element editable." },
        { q: "What is the purpose of the <meter> element?", o: ["Represents scalar measurement", "Creates meters", "Measures values", "Shows metrics"], c: 0, e: "<meter> represents a scalar measurement within a known range." },
        { q: "Which HTML element defines deleted text?", o: ["<del>", "<delete>", "<removed>", "<strike>"], c: 0, e: "<del> represents deleted text, typically shown with strikethrough." },
        { q: "What is the correct HTML for a date input?", o: ["<input type='date'>", "<date>", "<input type='calendar'>", "<calendar>"], c: 0, e: "<input type='date'> creates a date picker input." },
        { q: "Which HTML element defines inserted text?", o: ["<ins>", "<insert>", "<added>", "<new>"], c: 0, e: "<ins> represents inserted text, typically shown underlined." },
        { q: "What is the purpose of the <wbr> element?", o: ["Suggests line break opportunity", "Creates word breaks", "Breaks words", "Formats breaks"], c: 0, e: "<wbr> suggests where the browser might optionally break a line." },
        { q: "Which attribute specifies input pattern for validation?", o: ["pattern", "validate", "regex", "format"], c: 0, e: "The 'pattern' attribute specifies a regular expression for input validation." },
        { q: "What is the correct HTML for a datetime input?", o: ["<input type='datetime-local'>", "<datetime>", "<input type='datetime'>", "<time>"], c: 0, e: "<input type='datetime-local'> creates a date and time picker." },
        { q: "Which HTML element defines a variable?", o: ["<var>", "<variable>", "<v>", "<val>"], c: 0, e: "<var> represents a variable in mathematical expressions or programming." },
        { q: "What is the purpose of the <bdi> element?", o: ["Isolates bidirectional text", "Makes text bold", "Defines direction", "Formats text"], c: 0, e: "<bdi> isolates text that might be formatted in a different direction." },
        { q: "Which attribute makes an input field disabled?", o: ["disabled", "readonly", "locked", "inactive"], c: 0, e: "The 'disabled' attribute disables an input field." },
        { q: "What is the correct HTML for a week input?", o: ["<input type='week'>", "<week>", "<input type='calendar'>", "<calendar>"], c: 0, e: "<input type='week'> creates a week picker input." },
        { q: "Which HTML element defines a short quotation?", o: ["<q>", "<quote>", "<blockquote>", "<cite>"], c: 0, e: "<q> defines a short inline quotation." },
        { q: "What is the purpose of the <bdo> element?", o: ["Overrides text direction", "Makes text bold", "Defines direction", "Formats text"], c: 0, e: "<bdo> overrides the current text direction." },
        { q: "Which attribute specifies the minimum value for input?", o: ["min", "minimum", "minvalue", "low"], c: 0, e: "The 'min' attribute specifies the minimum value for numeric inputs." },
        { q: "What is the correct HTML for a month input?", o: ["<input type='month'>", "<month>", "<input type='calendar'>", "<calendar>"], c: 0, e: "<input type='month'> creates a month picker input." },
        { q: "Which HTML element defines a long quotation?", o: ["<blockquote>", "<quote>", "<q>", "<citation>"], c: 0, e: "<blockquote> defines a section quoted from another source." },
        { q: "What is the purpose of the <abbr> element?", o: ["Defines abbreviation or acronym", "Abbreviates text", "Creates short text", "Formats abbreviations"], c: 0, e: "<abbr> represents an abbreviation with optional title attribute." },
        { q: "Which attribute specifies maximum value for input?", o: ["max", "maximum", "maxvalue", "high"], c: 0, e: "The 'max' attribute specifies the maximum value for numeric inputs." },
        { q: "What is the correct HTML for a time input?", o: ["<input type='time'>", "<time>", "<input type='clock'>", "<clock>"], c: 0, e: "<input type='time'> creates a time picker input." },
        { q: "Which HTML element defines the title of a work?", o: ["<cite>", "<title>", "<work>", "<name>"], c: 0, e: "<cite> represents the title of a creative work." },
        { q: "What is the purpose of the <address> element?", o: ["Defines contact information", "Creates addresses", "Formats addresses", "Shows location"], c: 0, e: "<address> represents contact information for a document or article." },
        { q: "Which attribute specifies step value for numeric input?", o: ["step", "increment", "interval", "jump"], c: 0, e: "The 'step' attribute specifies the increment for numeric inputs." },
        { q: "What is the correct HTML for a file upload?", o: ["<input type='file'>", "<file>", "<upload>", "<input type='upload'>"], c: 0, e: "<input type='file'> creates a file upload field." },
        { q: "Which HTML element defines contact information?", o: ["<address>", "<contact>", "<info>", "<details>"], c: 0, e: "<address> provides contact information for its nearest article or body ancestor." },
        { q: "What is the purpose of the <data> element?", o: ["Links content with machine-readable value", "Stores data", "Creates databases", "Formats data"], c: 0, e: "<data> links content with a machine-readable translation." },
        { q: "Which attribute allows multiple file selection?", o: ["multiple", "multi", "many", "several"], c: 0, e: "The 'multiple' attribute allows selection of multiple files or options." },
        { q: "What is the purpose of the <output> element?", o: ["Displays calculation result", "Shows output", "Creates results", "Formats output"], c: 0, e: "<output> represents the result of a calculation or user action." },
        { q: "Which HTML element defines an abbreviation?", o: ["<abbr>", "<abbreviation>", "<short>", "<acro>"], c: 0, e: "<abbr> marks up abbreviations and acronyms." }
    ],
    css: [
        { q: "What does CSS stand for?", o: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], c: 0, e: "CSS stands for Cascading Style Sheets, used to style HTML elements." },
        { q: "Which property is used to change the background color?", o: ["background-color", "bgcolor", "color", "background"], c: 0, e: "background-color property sets the background color of an element." },
        { q: "How do you add a comment in CSS?", o: ["/* comment */", "// comment", "<!-- comment -->", "' comment"], c: 0, e: "CSS comments are written between /* and */." },
        { q: "Which property is used to change text color?", o: ["color", "text-color", "font-color", "foreground"], c: 0, e: "The 'color' property sets the color of text." },
        { q: "How do you select an element with id='header'?", o: ["#header", ".header", "header", "*header"], c: 0, e: "The # symbol is used to select elements by their ID." },
        { q: "How do you select elements with class='box'?", o: [".box", "#box", "box", "*box"], c: 0, e: "The . symbol is used to select elements by their class." },
        { q: "Which property is used to change font size?", o: ["font-size", "text-size", "font-style", "text-style"], c: 0, e: "font-size property controls the size of text." },
        { q: "What is the default display value for most HTML elements?", o: ["block", "inline", "flex", "grid"], c: 0, e: "Most HTML elements have a default display value of block or inline." },
        { q: "Which property is used to make text bold?", o: ["font-weight", "font-style", "text-weight", "text-bold"], c: 0, e: "font-weight property controls the boldness of text." },
        { q: "How do you make text italic in CSS?", o: ["font-style: italic", "text-style: italic", "font: italic", "text-decoration: italic"], c: 0, e: "font-style: italic makes text italic." },
        { q: "Which property adds space inside an element's border?", o: ["padding", "margin", "spacing", "border-spacing"], c: 0, e: "padding adds space inside the element's border." },
        { q: "Which property adds space outside an element's border?", o: ["margin", "padding", "spacing", "border-spacing"], c: 0, e: "margin adds space outside the element's border." },
        { q: "What is the correct syntax for adding a border?", o: ["border: 1px solid black", "border: black 1px solid", "border: solid 1px black", "All are correct"], c: 3, e: "All three syntax variations are valid for the border property." },
        { q: "Which property controls text alignment?", o: ["text-align", "text-position", "align", "font-align"], c: 0, e: "text-align property controls horizontal text alignment." },
        { q: "How do you center a block element horizontally?", o: ["margin: 0 auto", "text-align: center", "align: center", "center: true"], c: 0, e: "margin: 0 auto centers a block element with a defined width." },
        { q: "Which property is used for text decoration?", o: ["text-decoration", "text-style", "font-decoration", "decoration"], c: 0, e: "text-decoration adds decorations like underline to text." },
        { q: "What is the box model in CSS?", o: ["Content, Padding, Border, Margin", "Width, Height, Border", "Top, Right, Bottom, Left", "Display, Position, Float"], c: 0, e: "The CSS box model consists of content, padding, border, and margin." },
        { q: "Which property changes text to uppercase?", o: ["text-transform: uppercase", "text-case: upper", "font-transform: uppercase", "case: upper"], c: 0, e: "text-transform: uppercase converts text to uppercase." },
        { q: "How do you make a list not display bullets?", o: ["list-style-type: none", "list-type: none", "bullet: none", "list-bullet: none"], c: 0, e: "list-style-type: none removes bullet points from lists." },
        { q: "Which property is used to change letter spacing?", o: ["letter-spacing", "text-spacing", "font-spacing", "char-spacing"], c: 0, e: "letter-spacing controls space between characters." },
        { q: "What is the Z-index property used for?", o: ["Stacking order of elements", "Zoom level", "Z-axis rotation", "Element depth"], c: 0, e: "z-index controls the stacking order of positioned elements." },
        { q: "Which property creates rounded corners?", o: ["border-radius", "corner-radius", "rounded-corners", "border-round"], c: 0, e: "border-radius creates rounded corners on elements." },
        { q: "How do you make an element invisible but keep its space?", o: ["visibility: hidden", "display: none", "opacity: 0", "hidden: true"], c: 0, e: "visibility: hidden hides element but preserves its space." },
        { q: "Which property is used for flexbox layout?", o: ["display: flex", "layout: flex", "flexbox: true", "flex: display"], c: 0, e: "display: flex enables flexbox layout on an element." },
        { q: "What is the default flex-direction value?", o: ["row", "column", "row-reverse", "column-reverse"], c: 0, e: "The default flex-direction is row (horizontal)." },
        { q: "Which property controls opacity?", o: ["opacity", "transparency", "alpha", "visibility"], c: 0, e: "opacity property controls element transparency (0 to 1)." },
        { q: "How do you create a CSS grid?", o: ["display: grid", "layout: grid", "grid: true", "grid-display"], c: 0, e: "display: grid enables CSS grid layout." },
        { q: "Which property adds shadow to text?", o: ["text-shadow", "shadow", "font-shadow", "text-effect"], c: 0, e: "text-shadow adds shadow effects to text." },
        { q: "Which property adds shadow to boxes?", o: ["box-shadow", "shadow", "element-shadow", "border-shadow"], c: 0, e: "box-shadow adds shadow effects to elements." },
        { q: "What is the position property default value?", o: ["static", "relative", "absolute", "fixed"], c: 0, e: "The default position value is static." },
        { q: "How do you select all elements?", o: ["*", "all", ".all", "#all"], c: 0, e: "The * (asterisk) selector selects all elements." },
        { q: "Which property controls line height?", o: ["line-height", "text-height", "font-height", "line-spacing"], c: 0, e: "line-height controls the height of text lines." },
        { q: "What does 'em' unit represent?", o: ["Relative to parent font size", "Exact measurement", "Element margin", "Empty space"], c: 0, e: "em is relative to the parent element's font size." },
        { q: "What does 'rem' unit represent?", o: ["Relative to root font size", "Remaining space", "Remote element", "Responsive measurement"], c: 0, e: "rem is relative to the root (html) element's font size." },
        { q: "Which property creates a transition effect?", o: ["transition", "transform", "animation", "effect"], c: 0, e: "transition property creates smooth transitions between property changes." },
        { q: "How do you select first child element?", o: [":first-child", ":first", ".first", "#first"], c: 0, e: ":first-child pseudo-class selects the first child element." },
        { q: "Which property rotates an element?", o: ["transform: rotate()", "rotate", "rotation", "transform-rotate"], c: 0, e: "transform: rotate() rotates an element by specified degrees." },
        { q: "What is the overflow property used for?", o: ["Controls content overflow", "Element overflow", "Text overflow", "All of the above"], c: 3, e: "overflow controls what happens when content overflows element box." },
        { q: "Which property sets element width?", o: ["width", "size", "element-width", "box-width"], c: 0, e: "width property sets the width of an element." },
        { q: "How do you select last child element?", o: [":last-child", ":last", ".last", "#last"], c: 0, e: ":last-child pseudo-class selects the last child element." },
        { q: "Which property sets background image?", o: ["background-image", "bg-image", "image", "background-img"], c: 0, e: "background-image sets a background image for an element." },
        { q: "What does !important do in CSS?", o: ["Overrides other declarations", "Makes style important", "Adds priority", "All of the above"], c: 3, e: "!important gives a CSS declaration the highest priority." },
        { q: "Which property controls cursor appearance?", o: ["cursor", "pointer", "mouse", "cursor-style"], c: 0, e: "cursor property specifies the mouse cursor type." },
        { q: "How do you select hover state?", o: [":hover", ".hover", "#hover", "hover"], c: 0, e: ":hover pseudo-class selects element when mouse hovers over it." },
        { q: "Which property sets vertical alignment?", o: ["vertical-align", "v-align", "align-vertical", "valign"], c: 0, e: "vertical-align sets vertical alignment of inline elements." },
        { q: "What is calc() function used for?", o: ["Mathematical calculations", "Calendar dates", "Calculations only", "Calculate values"], c: 0, e: "calc() performs mathematical calculations in CSS values." },
        { q: "Which property creates animations?", o: ["animation", "animate", "keyframes", "transition"], c: 0, e: "animation property applies animations defined with @keyframes." },
        { q: "How do you select nth child?", o: [":nth-child(n)", ":nth(n)", ".nth-child", "#nth-child"], c: 0, e: ":nth-child(n) selects elements based on their position." },
        { q: "Which property sets text indent?", o: ["text-indent", "indent", "paragraph-indent", "first-line"], c: 0, e: "text-indent indents the first line of text." },
        { q: "What is viewport width unit?", o: ["vw", "vwidth", "viewport-width", "view-width"], c: 0, e: "vw (viewport width) is 1% of viewport width." },
        { q: "Which property controls word spacing?", o: ["word-spacing", "text-spacing", "space-between", "word-gap"], c: 0, e: "word-spacing controls space between words." },
        { q: "How do you create CSS variables?", o: ["--variable-name", "$variable-name", "@variable-name", "var(name)"], c: 0, e: "CSS variables are defined with -- prefix." },
        { q: "Which property clips element content?", o: ["clip-path", "clip", "mask", "crop"], c: 0, e: "clip-path clips an element to a specific shape." },
        { q: "What is object-fit property for?", o: ["Controls replaced element sizing", "Object positioning", "Element fitting", "Image scaling"], c: 0, e: "object-fit specifies how img/video content fits its container." },
        { q: "Which property creates gradients?", o: ["background: linear-gradient()", "gradient", "background-gradient", "color-gradient"], c: 0, e: "linear-gradient() creates color gradients." },
        { q: "How do you select focus state?", o: [":focus", ".focus", "#focus", "focus"], c: 0, e: ":focus pseudo-class selects focused elements." },
        { q: "Which property sets outline?", o: ["outline", "border-outline", "outer-border", "outside-border"], c: 0, e: "outline property creates an outline outside border." },
        { q: "What is backdrop-filter used for?", o: ["Applies effects to background", "Filter backdrop", "Background filter", "All of the above"], c: 3, e: "backdrop-filter applies effects to area behind an element." },
        { q: "Which property controls white space?", o: ["white-space", "space", "text-space", "whitespace"], c: 0, e: "white-space controls how white space is handled." },
        { q: "How do you select checked input?", o: [":checked", ".checked", "#checked", "checked"], c: 0, e: ":checked pseudo-class selects checked form elements." },
        { q: "Which property sets grid columns?", o: ["grid-template-columns", "grid-columns", "columns", "column-template"], c: 0, e: "grid-template-columns defines grid column structure." },
        { q: "What is aspect-ratio property for?", o: ["Sets width to height ratio", "Aspect calculation", "Ratio sizing", "Dimension ratio"], c: 0, e: "aspect-ratio sets preferred width-to-height ratio." },
        { q: "Which property aligns flex items?", o: ["align-items", "align", "flex-align", "item-align"], c: 0, e: "align-items aligns flex items along cross axis." },
        { q: "How do you select disabled input?", o: [":disabled", ".disabled", "#disabled", "disabled"], c: 0, e: ":disabled pseudo-class selects disabled form elements." },
        { q: "Which property justifies flex items?", o: ["justify-content", "justify", "flex-justify", "content-justify"], c: 0, e: "justify-content aligns flex items along main axis." },
        { q: "What is gap property used for?", o: ["Spacing between grid/flex items", "Grid gap", "Element gap", "Space gap"], c: 0, e: "gap sets spacing between grid or flex items." },
        { q: "Which property sets element height?", o: ["height", "size", "element-height", "box-height"], c: 0, e: "height property sets the height of an element." },
        { q: "How do you select empty elements?", o: [":empty", ".empty", "#empty", "empty"], c: 0, e: ":empty pseudo-class selects elements with no children." },
        { q: "Which property creates filters?", o: ["filter", "effect", "image-filter", "css-filter"], c: 0, e: "filter property applies visual effects like blur or grayscale." },
        { q: "What is mix-blend-mode for?", o: ["Blends element with background", "Mixing colors", "Blend effects", "Color mixing"], c: 0, e: "mix-blend-mode defines how element blends with background." },
        { q: "Which property sets grid rows?", o: ["grid-template-rows", "grid-rows", "rows", "row-template"], c: 0, e: "grid-template-rows defines grid row structure." },
        { q: "How do you select not a specific element?", o: [":not(selector)", ".not", "#not", "not"], c: 0, e: ":not() pseudo-class selects elements that don't match selector." },
        { q: "Which property sets flex item order?", o: ["order", "flex-order", "item-order", "position"], c: 0, e: "order property controls flex item display order." },
        { q: "What is column-count for?", o: ["Creates multi-column layout", "Counts columns", "Column number", "Grid columns"], c: 0, e: "column-count divides content into multiple columns." },
        { q: "Which property sets element position?", o: ["position", "placement", "location", "positioning"], c: 0, e: "position property sets positioning method for element." },
        { q: "How do you select before pseudo-element?", o: ["::before", ":before", ".before", "#before"], c: 0, e: "::before creates a pseudo-element before element content." },
        { q: "Which property sets flex item growth?", o: ["flex-grow", "grow", "flex-expansion", "item-grow"], c: 0, e: "flex-grow defines ability of flex item to grow." },
        { q: "What is writing-mode property for?", o: ["Sets text direction", "Writing direction", "Text mode", "Direction mode"], c: 0, e: "writing-mode sets whether text runs horizontally or vertically." },
        { q: "Which property sets flex item shrink?", o: ["flex-shrink", "shrink", "flex-reduce", "item-shrink"], c: 0, e: "flex-shrink defines ability of flex item to shrink." },
        { q: "How do you select after pseudo-element?", o: ["::after", ":after", ".after", "#after"], c: 0, e: "::after creates a pseudo-element after element content." },
        { q: "Which property wraps flex items?", o: ["flex-wrap", "wrap", "flex-wrapping", "item-wrap"], c: 0, e: "flex-wrap controls whether flex items wrap to new lines." },
        { q: "What is scroll-behavior for?", o: ["Controls scrolling animation", "Scroll type", "Scrolling mode", "Scroll effect"], c: 0, e: "scroll-behavior sets behavior for scrolling (smooth/auto)." },
        { q: "Which property sets flex basis?", o: ["flex-basis", "basis", "flex-size", "item-basis"], c: 0, e: "flex-basis sets initial size of flex item." },
        { q: "How do you select first of type?", o: [":first-of-type", ":first-type", ".first-type", "#first-type"], c: 0, e: ":first-of-type selects first element of its type." },
        { q: "Which property sets object position?", o: ["object-position", "position", "image-position", "content-position"], c: 0, e: "object-position sets alignment of replaced element content." },
        { q: "What is user-select for?", o: ["Controls text selection", "User selection", "Select behavior", "Text select"], c: 0, e: "user-select controls whether user can select text." },
        { q: "Which property creates counters?", o: ["counter-increment", "counter", "numbering", "count"], c: 0, e: "counter-increment creates and increments CSS counters." },
        { q: "How do you select last of type?", o: [":last-of-type", ":last-type", ".last-type", "#last-type"], c: 0, e: ":last-of-type selects last element of its type." },
        { q: "Which property sets pointer events?", o: ["pointer-events", "events", "mouse-events", "cursor-events"], c: 0, e: "pointer-events controls under what circumstances element can be pointer target." },
        { q: "What is will-change for?", o: ["Hints browser about changes", "Future changes", "Animation hint", "Performance hint"], c: 0, e: "will-change hints browser about expected element changes for optimization." },
        { q: "Which property controls table layout?", o: ["table-layout", "layout", "table-style", "table-mode"], c: 0, e: "table-layout sets algorithm used to layout table cells." },
        { q: "How do you select only child?", o: [":only-child", ":only", ".only-child", "#only-child"], c: 0, e: ":only-child selects element that is only child of parent." },
        { q: "Which property sets resize behavior?", o: ["resize", "resizable", "user-resize", "can-resize"], c: 0, e: "resize property controls if/how element can be resized by user." },
        { q: "What is contain property for?", o: ["Limits rendering scope", "Contains content", "Content containment", "Element contain"], c: 0, e: "contain indicates element's contents are independent for performance." },
        { q: "Which property sets caret color?", o: ["caret-color", "cursor-color", "input-color", "text-cursor"], c: 0, e: "caret-color sets color of text input cursor." },
        { q: "How do you select only of type?", o: [":only-of-type", ":only-type", ".only-type", "#only-type"], c: 0, e: ":only-of-type selects element that is only one of its type." },
        { q: "Which property controls scrollbar display?", o: ["overflow", "scrollbar", "scroll", "scroll-display"], c: 0, e: "overflow controls scrollbar display and content clipping." }
    ],
    javascript: [
        { q: "What does JS stand for?", o: ["JavaScript", "JavaSource", "JustScript", "JScript"], c: 0, e: "JS stands for JavaScript, a programming language for web development." },
        { q: "Which keyword declares a variable?", o: ["let", "var", "const", "All of the above"], c: 3, e: "Variables can be declared using let, var, or const." },
        { q: "What is the correct syntax for a comment?", o: ["// comment", "/* comment */", "<!-- comment -->", "Both A and B"], c: 3, e: "JavaScript supports // for single-line and /* */ for multi-line comments." },
        { q: "Which method displays an alert?", o: ["alert()", "message()", "prompt()", "confirm()"], c: 0, e: "alert() displays an alert dialog box." },
        { q: "How do you write a console log?", o: ["console.log()", "log.console()", "print()", "console.write()"], c: 0, e: "console.log() outputs messages to the browser console." },
        { q: "Which operator is used for equality?", o: ["===", "==", "=", "equals"], c: 0, e: "=== checks for strict equality (value and type)." },
        { q: "What is the typeof operator used for?", o: ["Returns data type", "Type conversion", "Type checking", "Type definition"], c: 0, e: "typeof returns a string indicating the type of a value." },
        { q: "How do you declare a function?", o: ["function name()", "func name()", "def name()", "function:name"], c: 0, e: "Functions are declared with the function keyword." },
        { q: "Which method adds element to array end?", o: ["push()", "add()", "append()", "insert()"], c: 0, e: "push() adds one or more elements to end of array." },
        { q: "How do you create an array?", o: ["[]", "{}", "()", "<>"], c: 0, e: "Arrays are created using square brackets []." },
        { q: "Which method removes last array element?", o: ["pop()", "remove()", "delete()", "pull()"], c: 0, e: "pop() removes and returns the last element of array." },
        { q: "What is NaN in JavaScript?", o: ["Not a Number", "Null and None", "New and Next", "Number and Null"], c: 0, e: "NaN represents 'Not-a-Number' value." },
        { q: "Which method converts string to number?", o: ["Number()", "parseInt()", "parseFloat()", "All of the above"], c: 3, e: "All three methods can convert strings to numbers." },
        { q: "How do you create an object?", o: ["{}", "[]", "object()", "new Object()"], c: 0, e: "Objects are created using curly braces {}." },
        { q: "Which keyword creates a constant?", o: ["const", "constant", "final", "let"], c: 0, e: "const declares a constant (read-only) variable." },
        { q: "What does DOM stand for?", o: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Display Object Management"], c: 0, e: "DOM stands for Document Object Model." },
        { q: "Which method gets element by ID?", o: ["getElementById()", "getElement()", "findById()", "selectById()"], c: 0, e: "getElementById() returns element with specified ID." },
        { q: "How do you add event listener?", o: ["addEventListener()", "attachEvent()", "on()", "bind()"], c: 0, e: "addEventListener() attaches event handler to element." },
        { q: "Which loop iterates over object properties?", o: ["for...in", "for...of", "forEach", "for"], c: 0, e: "for...in loop iterates over object properties." },
        { q: "What is callback function?", o: ["Function passed as argument", "Function that calls back", "Recursive function", "Return function"], c: 0, e: "A callback is a function passed as argument to another function." },
        { q: "Which method converts array to string?", o: ["join()", "toString()", "stringify()", "All of the above"], c: 3, e: "join(), toString() can convert arrays to strings." },
        { q: "What is use strict mode?", o: ["Enables strict mode", "Strict typing", "Error checking", "Security mode"], c: 0, e: "'use strict' enables strict mode for catching common errors." },
        { q: "Which method returns array length?", o: ["length", "size()", "count()", "len()"], c: 0, e: "length property returns number of elements in array." },
        { q: "How do you check if variable is array?", o: ["Array.isArray()", "typeof", "instanceof Array", "isArray()"], c: 0, e: "Array.isArray() checks if value is an array." },
        { q: "Which method adds element to array start?", o: ["unshift()", "push()", "addFirst()", "prepend()"], c: 0, e: "unshift() adds elements to beginning of array." },
        { q: "What is closure in JavaScript?", o: ["Function with access to outer scope", "Closed function", "Private function", "Nested function"], c: 0, e: "A closure is function with access to outer function's variables." },
        { q: "Which method removes first array element?", o: ["shift()", "pop()", "removeFirst()", "pull()"], c: 0, e: "shift() removes and returns first element of array." },
        { q: "How do you create promise?", o: ["new Promise()", "Promise()", "promise()", "createPromise()"], c: 0, e: "Promises are created using new Promise() constructor." },
        { q: "Which method filters array?", o: ["filter()", "find()", "search()", "select()"], c: 0, e: "filter() creates new array with elements passing test." },
        { q: "What is async/await?", o: ["Asynchronous programming syntax", "Async function", "Wait function", "Promise syntax"], c: 0, e: "async/await provides cleaner syntax for promises." },
        { q: "Which method maps array?", o: ["map()", "forEach()", "transform()", "convert()"], c: 0, e: "map() creates new array with results of function on every element." },
        { q: "What is JSON?", o: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Standard Object Notation", "JavaScript Object Network"], c: 0, e: "JSON stands for JavaScript Object Notation, data format." },
        { q: "Which method reduces array?", o: ["reduce()", "reduceRight()", "sum()", "aggregate()"], c: 0, e: "reduce() reduces array to single value." },
        { q: "How do you parse JSON?", o: ["JSON.parse()", "parse()", "JSON.decode()", "decode()"], c: 0, e: "JSON.parse() converts JSON string to JavaScript object." },
        { q: "Which method finds array element?", o: ["find()", "search()", "filter()", "locate()"], c: 0, e: "find() returns first element satisfying test function." },
        { q: "How do you stringify object?", o: ["JSON.stringify()", "stringify()", "JSON.encode()", "encode()"], c: 0, e: "JSON.stringify() converts JavaScript object to JSON string." },
        { q: "Which method checks if element exists?", o: ["includes()", "contains()", "has()", "exists()"], c: 0, e: "includes() checks if array contains specified element." },
        { q: "What is arrow function syntax?", o: ["() => {}", "function() {}", "() -> {}", "=> () {}"], c: 0, e: "Arrow functions use () => {} syntax." },
        { q: "Which method sorts array?", o: ["sort()", "order()", "arrange()", "organize()"], c: 0, e: "sort() sorts array elements in place." },
        { q: "What is template literal?", o: ["String with backticks", "String template", "Literal string", "Template string"], c: 0, e: "Template literals use backticks for string interpolation." },
        { q: "Which method reverses array?", o: ["reverse()", "invert()", "flip()", "backward()"], c: 0, e: "reverse() reverses array elements in place." },
        { q: "How do you destructure array?", o: ["[a, b] = array", "{a, b} = array", "a, b = array", "array[a, b]"], c: 0, e: "Array destructuring uses square brackets []." },
        { q: "Which method joins arrays?", o: ["concat()", "merge()", "combine()", "join()"], c: 0, e: "concat() merges two or more arrays." },
        { q: "What is spread operator?", o: ["...", "***", "+++", ":::"], c: 0, e: "Spread operator (...) expands iterables." },
        { q: "Which method slices array?", o: ["slice()", "cut()", "substr()", "substring()"], c: 0, e: "slice() returns shallow copy of array portion." },
        { q: "How do you destructure object?", o: ["{a, b} = obj", "[a, b] = obj", "a, b = obj", "obj{a, b}"], c: 0, e: "Object destructuring uses curly braces {}." },
        { q: "Which method splices array?", o: ["splice()", "slice()", "split()", "insert()"], c: 0, e: "splice() changes array by removing/replacing elements." },
        { q: "What is rest parameter?", o: ["...args", "args...", "...rest", "args*"], c: 0, e: "Rest parameter (...) collects arguments into array." },
        { q: "Which method iterates array?", o: ["forEach()", "each()", "iterate()", "loop()"], c: 0, e: "forEach() executes function for each array element." },
        { q: "What is this keyword?", o: ["Refers to current object", "This variable", "Current function", "Self reference"], c: 0, e: "this refers to the object it belongs to." },
        { q: "Which method tests array elements?", o: ["every()", "all()", "test()", "check()"], c: 0, e: "every() tests if all elements pass test." },
        { q: "How do you bind function context?", o: ["bind()", "attach()", "connect()", "link()"], c: 0, e: "bind() creates function with bound this value." },
        { q: "Which method tests some elements?", o: ["some()", "any()", "test()", "check()"], c: 0, e: "some() tests if at least one element passes test." },
        { q: "What is prototype?", o: ["Object property inheritance", "Object template", "Object copy", "Object reference"], c: 0, e: "Prototype is mechanism for object property inheritance." },
        { q: "Which method finds element index?", o: ["indexOf()", "findIndex()", "search()", "locate()"], c: 0, e: "indexOf() returns first index of element." },
        { q: "How do you create class?", o: ["class Name {}", "new class Name", "class: Name", "Name class {}"], c: 0, e: "Classes are declared using class keyword." },
        { q: "Which method checks array condition?", o: ["some()", "every()", "includes()", "All of the above"], c: 3, e: "some(), every(), includes() check array conditions." },
        { q: "What is constructor function?", o: ["Function that creates objects", "Function builder", "Object creator", "Class function"], c: 0, e: "Constructor function creates and initializes objects." },
        { q: "Which method returns last index?", o: ["lastIndexOf()", "findLast()", "lastIndex()", "searchLast()"], c: 0, e: "lastIndexOf() returns last index of element." },
        { q: "How do you extend class?", o: ["extends", "inherits", "super", "inherit"], c: 0, e: "extends keyword creates class inheritance." },
        { q: "Which method flattens array?", o: ["flat()", "flatten()", "merge()", "concat()"], c: 0, e: "flat() creates new array with sub-arrays concatenated." },
        { q: "What is super keyword?", o: ["Calls parent class", "Superior function", "Super variable", "Override function"], c: 0, e: "super calls parent class constructor/methods." },
        { q: "Which method flat maps array?", o: ["flatMap()", "flatten()", "mapFlat()", "merge()"], c: 0, e: "flatMap() maps then flattens result." },
        { q: "What is getter method?", o: ["Gets property value", "Get function", "Property getter", "Value retriever"], c: 0, e: "Getter method gets property value." },
        { q: "Which method fills array?", o: ["fill()", "populate()", "set()", "assign()"], c: 0, e: "fill() fills array elements with static value." },
        { q: "What is setter method?", o: ["Sets property value", "Set function", "Property setter", "Value assigner"], c: 0, e: "Setter method sets property value." },
        { q: "Which method copies array portion?", o: ["copyWithin()", "copy()", "clone()", "duplicate()"], c: 0, e: "copyWithin() copies array elements within array." },
        { q: "What is static method?", o: ["Method called on class", "Fixed method", "Constant method", "Class function"], c: 0, e: "Static methods are called on class, not instances." },
        { q: "Which method creates array from iterable?", o: ["Array.from()", "toArray()", "createArray()", "new Array()"], c: 0, e: "Array.from() creates array from iterable object." },
        { q: "What is module in JavaScript?", o: ["Reusable code file", "Code module", "Function group", "Class container"], c: 0, e: "Module is file containing reusable code." },
        { q: "Which method creates array of values?", o: ["Array.of()", "Array.create()", "Array.new()", "Array.make()"], c: 0, e: "Array.of() creates array from arguments." },
        { q: "How do you export module?", o: ["export", "module.exports", "exports", "All of the above"], c: 3, e: "Modules can be exported using export or module.exports." },
        { q: "Which method returns array keys?", o: ["keys()", "getKeys()", "Object.keys()", "keyArray()"], c: 0, e: "keys() returns iterator of array keys." },
        { q: "How do you import module?", o: ["import", "require()", "include()", "Both A and B"], c: 3, e: "Modules imported using import or require()." },
        { q: "Which method returns array values?", o: ["values()", "getValues()", "Object.values()", "valueArray()"], c: 0, e: "values() returns iterator of array values." },
        { q: "What is default export?", o: ["Single main export", "Default value", "Primary export", "Main module"], c: 0, e: "Default export is main value exported from module." },
        { q: "Which method returns array entries?", o: ["entries()", "getEntries()", "items()", "pairs()"], c: 0, e: "entries() returns iterator of key/value pairs." },
        { q: "What is named export?", o: ["Multiple named exports", "Named value", "Export list", "Named module"], c: 0, e: "Named exports allow multiple exports from module." },
        { q: "How do you set timeout?", o: ["setTimeout()", "delay()", "wait()", "pause()"], c: 0, e: "setTimeout() executes function after delay." },
        { q: "What is Set in JavaScript?", o: ["Collection of unique values", "Variable set", "Value setter", "Data set"], c: 0, e: "Set is collection storing unique values." },
        { q: "How do you set interval?", o: ["setInterval()", "repeat()", "interval()", "recurring()"], c: 0, e: "setInterval() repeatedly executes function." },
        { q: "What is Map in JavaScript?", o: ["Collection of key-value pairs", "Array map", "Object mapper", "Data map"], c: 0, e: "Map is collection storing key-value pairs." },
        { q: "How do you clear timeout?", o: ["clearTimeout()", "stopTimeout()", "cancelTimeout()", "removeTimeout()"], c: 0, e: "clearTimeout() cancels timeout." },
        { q: "Which method adds to Set?", o: ["add()", "insert()", "push()", "append()"], c: 0, e: "add() adds value to Set." },
        { q: "How do you clear interval?", o: ["clearInterval()", "stopInterval()", "cancelInterval()", "removeInterval()"], c: 0, e: "clearInterval() stops interval." },
        { q: "Which method deletes from Set?", o: ["delete()", "remove()", "clear()", "erase()"], c: 0, e: "delete() removes value from Set." },
        { q: "What is event bubbling?", o: ["Event propagates up DOM tree", "Event bubble", "Upward event", "Event flow"], c: 0, e: "Event bubbling is event propagation from target to ancestors." },
        { q: "Which method checks Set value?", o: ["has()", "contains()", "includes()", "exists()"], c: 0, e: "has() checks if value exists in Set." },
        { q: "What is event capturing?", o: ["Event propagates down DOM tree", "Event capture", "Downward event", "Event phase"], c: 0, e: "Event capturing is event propagation from root to target." },
        { q: "Which method clears Set?", o: ["clear()", "empty()", "reset()", "removeAll()"], c: 0, e: "clear() removes all values from Set." },
        { q: "How do you prevent default?", o: ["preventDefault()", "stopDefault()", "cancelDefault()", "blockDefault()"], c: 0, e: "preventDefault() prevents default browser behavior." },
        { q: "Which method sets Map value?", o: ["set()", "put()", "add()", "insert()"], c: 0, e: "set() adds key-value pair to Map." },
        { q: "How do you stop propagation?", o: ["stopPropagation()", "stopEvent()", "cancelPropagation()", "blockPropagation()"], c: 0, e: "stopPropagation() stops event propagation." },
        { q: "Which method gets Map value?", o: ["get()", "fetch()", "retrieve()", "find()"], c: 0, e: "get() retrieves value by key from Map." },
        { q: "What is localStorage?", o: ["Stores data locally", "Local storage", "Browser storage", "Persistent storage"], c: 0, e: "localStorage stores data with no expiration." },
        { q: "Which method deletes Map entry?", o: ["delete()", "remove()", "erase()", "clear()"], c: 0, e: "delete() removes entry by key from Map." },
        { q: "What is sessionStorage?", o: ["Stores data for session", "Session storage", "Temporary storage", "Browser session"], c: 0, e: "sessionStorage stores data for browser session." },
        { q: "Which method checks Map key?", o: ["has()", "contains()", "includes()", "exists()"], c: 0, e: "has() checks if key exists in Map." },
        { q: "How do you get cookie?", o: ["document.cookie", "getCookie()", "cookie.get()", "readCookie()"], c: 0, e: "document.cookie accesses cookies." },
        { q: "Which method clears Map?", o: ["clear()", "empty()", "reset()", "removeAll()"], c: 0, e: "clear() removes all entries from Map." },
        { q: "What is WeakSet?", o: ["Set with weak references", "Weak collection", "Garbage collected set", "Temporary set"], c: 0, e: "WeakSet holds weak references allowing garbage collection." },
        { q: "How do you get URL parameters?", o: ["URLSearchParams", "getParams()", "parseURL()", "queryString()"], c: 0, e: "URLSearchParams parses URL query string." },
        { q: "What is WeakMap?", o: ["Map with weak references", "Weak collection", "Garbage collected map", "Temporary map"], c: 0, e: "WeakMap holds weak references to keys." },
        { q: "Which method encodes URI?", o: ["encodeURIComponent()", "encode()", "encodeURI()", "Both A and C"], c: 3, e: "encodeURIComponent() and encodeURI() encode URIs." },
        { q: "What is Symbol in JavaScript?", o: ["Unique identifier", "Symbol type", "Unique value", "Primitive type"], c: 0, e: "Symbol creates unique, immutable identifiers." },
        { q: "Which method decodes URI?", o: ["decodeURIComponent()", "decode()", "decodeURI()", "Both A and C"], c: 3, e: "decodeURIComponent() and decodeURI() decode URIs." },
        { q: "What is generator function?", o: ["Function that can pause", "Generator", "Pausable function", "Yield function"], c: 0, e: "Generator function can pause and resume execution." },
        { q: "How do you check if value is NaN?", o: ["isNaN()", "Number.isNaN()", "checkNaN()", "Both A and B"], c: 3, e: "isNaN() and Number.isNaN() check for NaN." },
        { q: "What is yield keyword?", o: ["Pauses generator function", "Return value", "Generator pause", "Yield value"], c: 0, e: "yield pauses generator and returns value." },
        { q: "Which method checks if finite?", o: ["isFinite()", "Number.isFinite()", "checkFinite()", "Both A and B"], c: 3, e: "isFinite() and Number.isFinite() check for finite numbers." },
        { q: "What is iterator in JavaScript?", o: ["Object that defines iteration", "Iterator object", "Loop object", "Iteration protocol"], c: 0, e: "Iterator is object implementing iteration protocol." }
    ]
};

let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let selectedAnswer = null;
let questions = [];

function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    questions = [...quizData[topic]];

    document.querySelector('.home-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    timeLeft = 10;

    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById('questionText').textContent = question.q;

    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.o.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('explanation').classList.remove('show');
    document.getElementById('nextBtn').style.display = 'none';

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 3) {
            document.getElementById('timer').classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = timeLeft + 's';
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return;

    clearInterval(timer);
    selectedAnswer = index;

    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(opt => opt.classList.add('disabled'));
    options[index].classList.add('selected');

    if (index === question.c) {
        options[index].classList.add('correct');
        score++;
    } else {
        options[index].classList.add('wrong');
        options[question.c].classList.add('correct');
    }

    document.getElementById('explanationText').textContent = question.e;
    document.getElementById('explanation').classList.add('show');
    document.getElementById('nextBtn').style.display = 'block';
}

function showCorrectAnswer() {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(opt => opt.classList.add('disabled'));
    options[question.c].classList.add('correct');

    document.getElementById('explanationText').textContent = question.e;
    document.getElementById('explanation').classList.add('show');
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    clearInterval(timer);

    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');

    const percentage = Math.round((score / questions.length) * 100);
    const wrong = questions.length - score;

    document.getElementById('scoreCircle').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('accuracyPercent').textContent = percentage + '%';

    let message = '';
    if (percentage >= 90) message = '🏆 Outstanding! You\'re a master!';
    else if (percentage >= 75) message = '🌟 Excellent work! Keep it up!';
    else if (percentage >= 60) message = '👍 Good job! Room for improvement!';
    else if (percentage >= 40) message = '📚 Keep practicing! You\'ll get better!';
    else message = '💪 Don\'t give up! Practice makes perfect!';

    document.getElementById('resultMessage').textContent = message;
}

function retryQuiz() {
    startQuiz(currentTopic);
}

function goHome() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.home-screen').classList.add('active');
}
