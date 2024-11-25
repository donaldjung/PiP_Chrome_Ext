# PiP_Chrome_Ext
Google chrome extension allowing picture in picture (video popout) for any video<br>

To use it...Load the extension in Chrome:<br>

1. Create a new folder with three files:<br>
manifest.json<br>
background.js<br>
content.js<br>
Your icon files (icon48.png and icon128.png)<br>


2. Go to chrome://extensions/<br>
Enable "Developer mode" (top right)<br>
Click "Load unpacked"<br>
Select your extension directory<br>

3. To use click extention in the google chrome toolbar of the webpage containing a Video.<br>

Features:<br>
Works on any webpage with video elements <br>
Automatically finds the currently playing video, or defaults to the first video on the page<br>
Supports toggling PiP mode on/off<br>

The extension uses Chrome's Manifest V3 and modern JavaScript features. It will work with most HTML5 video players, including YouTube, Vimeo, and other popular video platforms.<br>
