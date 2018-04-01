# GEO_IP {#GEO_IP}

Use an IP Address to lookup geo information

Properties:

 * Attribute - The attribute to extract for the given IP address

{% raw %}

|IP Address|Attribute|result|
|----------|---------|------|
|`"2.87.124.4"`|`"Locale Code"`|`"en"`|
|`"2.87.124.4"`|`"Continent Code"`|`"EU"`|
|`"2.87.124.4"`|`"Continent Name"`|`"Europe"`|
|`"2.87.124.4"`|`"Country Iso Code"`|`"GR"`|
|`"2.87.124.4"`|`"Country Name"`|`"Greece"`|
|`"2.87.124.4"`|`"Subdivision 1 Iso Code"`|`"L"`|
|`"2.87.124.4"`|`"Subdivision 1 Name"`|`"South Aegean"`|
|`"2.87.124.4"`|`"Subdivision 2 Iso Code"`|`"81"`|
|`"2.87.124.4"`|`"Subdivision 2 Name"`|`"Dodecanese"`|
|`"2.87.124.4"`|`"City Name"`|`"Rhodes"`|
|`"2.87.124.4"`|`"Metro Code"`|`"Europe/Athens"`|
|`"2.87.124.4"`|`"Time Zone"`|`""`|

{% endraw %}


# USER_AGENT_PARSER {#USER_AGENT_PARSER}

Parse the user agent and extract a parameter from it

Inputs:

 * User Agent String - String representation of a user agent

Properties:

 * Attributes - The attributes to extract

{% raw %}

|User Agent String|Attributes|result|
|-----------------|----------|------|
|`"Mozilla/5.0 (*Mac OS X 10?12*) adbeat.com* Version* Safari*"`|`["Matching Pattern", "Rendering Engine Maker", "Rendering Engine Description", "Rendering Engine Version", "Rendering Engine Name", "Device Brand Name", "Device Code Name", "Device Pointing Method", "Device Type", "Device Maker", "Device Name", "Aol Version", "Css Version", "Is Modified", "Is Anonymized", "Is Fake", "Crawler", "Is SyndicationReader", "Is Tablet", "Is MobileDevice", "ActiveX Controls", "Java Applets", "VBScript", "JavaScript", "BackgroundSounds", "Cookies", "Tables", "IFrames", "Frames", "Win64", "Win32", "Win16", "Beta", "Alpha", "Platform Maker", "Platform Bits", "Platform Description", "Platform Version", "Platform", "Minor Version", "Major Version", "Version", "Browser Modus", "Browser Maker", "Browser Bits", "Browser Type", "Browser", "Comment", "Parent", "LiteMode", "Master Parent"]`|`{"Matching Pattern": "restify", "Rendering Engine Maker": "Apple Inc", "Rendering Engine Description": "For Google Chrome, iOS (including both mobile Safari, WebViews within third-party apps, and web clips), Safari, Arora, Midori, OmniWeb, Shiira, iCab since version 4, Web, SRWare Iron, Rekonq, and in Maxthon 3.", "Rendering Engine Version": "", "Rendering Engine Name": "WebKit", "Device Brand Name": "", "Device Code Name": "", "Device Pointing Method": "", "Device Type": "", "Device Maker": "", "Device Name": "", "Aol Version": "0", "Css Version": "0", "Is Modified": "false", "Is Anonymized": "false", "Is Fake": "false", "Crawler": "true", "Is SyndicationReader": "false", "Is Tablet": "false", "Is MobileDevice": "false", "ActiveX Controls": "false", "Java Applets": "true", "VBScript": "false", "JavaScript": "false", "BackgroundSounds": "false", "Cookies": "false", "Tables": "false", "IFrames": "false", "Frames": "false", "Win64": "false", "Win32": "false", "Win16": "false", "Beta": "false", "Alpha": "false", "Platform Maker": "", "Platform Bits": "0", "Platform Description": "", "Platform Version": "", "Platform": "", "Minor Version": "0", "Major Version": "0", "Version": "0.0", "Browser Modus": "", "Browser Maker": "Mark Cavage", "Browser Bits": "0", "Browser Type": "Bot/Crawler", "Browser": "restify", "Comment": "restify", "Parent": "DefaultProperties", "LiteMode": "false", "Master Parent": "true"}`|

{% endraw %}
