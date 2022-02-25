# gibrancastillo.github.io
Gibran's GitHub Page

- [Emmet (an ant) cheat sheet](https://docs.emmet.io/cheat-sheet/)

Command Cheat Sheets for 
- [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)


## Additional Resources
- [What are browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)?—MDN
- [Chrome DevTool](https://developers.google.com/web/tools/chrome-devtools)—developers.google.com 
- [Microsoft Edge DevTools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/beginners/html)—microsoft.com







# WDD 230 Development Standards Checklist
The following list is modeled, in part, after [The Front-End Checklist](https://frontendchecklist.io/) by David Dias.
The references are to [MDN Web Doc—Mozilla](https://developer.mozilla.org/en-US/) sources.

## Overall
All folders and files follow the course naming rules which include lowercase only, no spaces, and are friendly or semantic.
Web Naming Rules and Standards
When working on the web, there are many things that affect the operation of the files—the browser, the protocol(s), the client and server operating systems, the language(s), etc. While many of these are out of your control, there are steps you can take to help keep things consistent. We label these steps and "best-practice" procedures as the web naming rules or naming conventions and should be applied to all files and folders in this class. Each organization may have their own guides and "best practices" as many of these items may be platform specific.

### 230 Rules for Naming Files and Folders
► Use all lowercase. Different platforms and systems handle case sensitivity differently.

► Do not use spaces in names. Spaces are interrupted obtusely by user agents, therefore, do not use them. The Hypertext Transfer Protocol (HTTP) ignores spaces, except in file names. In file names, it replaces a space with a symbol—"%20." This makes URL's look confusing and can also lend itself to confusion in the mind of site visitors. Instead, if you have to create a visual space, use underscores (_) or hyphens (-).

► Do not use special characters (such as, <,>, \, /, #, ?, !). Special characters often mean specific things to computers, so just avoid using them completely in the naming of files and folders.

► Use as short and as meaningful (semantic) of names as possible. Short, meaningful names save you, other developers, and site visitors from having to remember long complicated names for files and folders. When meaningful, they also help with the predictive nature of the file or folder contents when working with those files or folders.

In this class, we will use some standard folder names for our sites/sub-folders:

CSS  (this folder will contain our CSS files
JS (this folder will contain our JavaScript files
Images (this folder will contain our images)
Reference: [Dealing With Files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)—moz://a MDN web docs

Be kind and helpful to yourself and site visitors by following these simple rules. Also, be aware that for the class, you will be held accountable for doing so as this is part of the overall assessment criteria with deliverables.

🌮 Aside: Common Naming Conventions in Programming
  While not necessarily used for file and folder names these are the common naming casings are found in programming with source code. 
•  Camel Case—each word within a compound word name is capitalized except for the first word.  Examples: julySales, getNewReport()
•  Pascal Case—each word within a compound word name is capitalized.   Examples:  JulySales, GetNewReport()
•  Underscore or Snake Case—each word within a compound word name is separated by underscores. Often found in file names but not preferred due to the fact that underlining will happen with hypertext by default, leading to confusion. Examples: july_sales, get_new_report(), soda_springs.html
•  Kebab Case—all the letters are lower case and each word is separated by a hyphen or minus sign. Examples: july-sales, get-new-report(), soda-springs.html

References
• [MDN JavaScript Variable Naming](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript#Variable_naming)
• [Dev.to Clean Coding](https://dev.to/danialmalik/a-beginner-s-guide-to-clean-code-part1-naming-conventions-139l)


No relevant violations of design principles of [alignment, proximity, contrast, repetition](https://byui.instructure.com/courses/10157/pages/w02-activity-design-principles), and usable typography.
The visual appearance of all pages in the site must be responsive, uniform, and consistent at three, basic view levels.
The page/site does not contain spelling and grammatical errors.


## Head
The following are correctly declared and used in the head section of all [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) pages.

• [HTML5 doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
• [meta charset attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
• [meta viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport) (do not use a maximum-scale)
• [A meaningful title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title?ref=frontendchecklist) (about 70 characters maximum)
• [meta description](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description?ref=frontendchecklist) (SEO unique and no more than 300 characters)
• [external CSS file references](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) are in the proper order

## HTML
• W3C compliant—validated to identify possible issues—[W3C validator](https://validator.w3.org/?ref=frontendchecklist)
• [Semantic elements](https://htmlreference.io/) are used
• Check for broken links—[W3C Link Checker](https://validator.w3.org/checklink?ref=frontendchecklist)

## CSS
• All embedded or inline CSS is avoided
• [Google Fonts API](https://fonts.google.com/)
• [Google Fonts Information](https://developers.google.com/fonts/)
[Get Started with the Google Fonts API](https://developers.google.com/fonts/docs/getting_started)
• W3C compliant—validated to identify possible issues—[W3C validator](https://jigsaw.w3.org/css-validator/)
• [CSS normalize](https://necolas.github.io/normalize.css/) is used and up to date
• [Unique ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)—if an ID selector is used, it is unique to a page (the planned use of [class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) is preferred)
• All pages are tested for responsive web design with appropriately sized text, links, and no scrolling to the right nor deadspace.
• The CSS is not repeated or duplicated unnecessarily between views nor duplicated because of the use of non-congruent selectors nor left unused from the design and development cycle.
• No reasonable violations of design principles in the styling and layout in all three views.

## JavaScript
• No errors nor references to unused JavaScript functions per page
• No output to the console in the live version of the page
• [How to display the date and time of a document when it is last modified in javascript](https://www.tutorialspoint.com/how-to-display-the-date-and-time-of-a-document-when-it-is-last-modified-in-javascript)

## Images
• [Optimized](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) to fit the design needs of the site (image is no larger than needed at its maximum size on the page)
• [Aspect ratios](https://web.dev/image-aspect-ratio/) match the saved image ratio
• The [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) is assigned a relevant value

## Accessibility
• The [lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) is used in the opening <html> tag
• [Headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) are used in the proper order
• [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) test errors and warnings are reviewed—[wave testing through the web developer extension](https://wave.webaim.org/)
• No [color contrast](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#color_and_color_contrast) violations—[DevTools Audit](https://developer.chrome.com/docs/devtools/accessibility/reference/#contrast)

## Performance
• The page weight does not exceed 500KB
• [Google PageSpeed test](https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect) results at least 90
