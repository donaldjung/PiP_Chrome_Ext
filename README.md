# PiP_Chrome_Ext
Google chrome extension allowing picture in picture (video popout) for any video

To use it...Load the extension in Chrome:

1. Create a new folder with three files:
manifest.json
background.js
content.js
Your icon files (icon48.png and icon128.png)


2. Go to chrome://extensions/
Enable "Developer mode" (top right)
Click "Load unpacked"
Select your extension directory

3. To use click extention in the google chrome toolbar of the webpage containing a Video.

Features:
Works on any webpage with video elements (
Automatically finds the currently playing video, or defaults to the first video on the page
Handles errors gracefully with user feedback
Supports toggling PiP mode on/off

The extension uses Chrome's Manifest V3 and modern JavaScript features. It will work with most HTML5 video players, including YouTube, Vimeo, and other popular video platforms.
