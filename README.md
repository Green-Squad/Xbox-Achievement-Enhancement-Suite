# Xbox Achievement Enhancement Suite

This Chrome extension adds additional functionality to the Xbox.com Achievement list.

## Why make this?

Halo: The Master Chief Collection has 500 achievements, so it can be hard to find specific achievements. Tools like TrueAchievements.com can filter these achievements for you, but there is a limit to how many times you can update the achievement data.  

Xbox.com has all of the data needed and it does not have an update cap. That is where the idea for this extension came from.

## How do I use it?

First, get the extension by either:

- Downloading from the [Chrome Web Store](https://chrome.google.com/webstore/detail/xbox-achievement-enhancem/mglbdbblfpcfbbihmnfblknlinhalmch).  
- Or by cloning this project and [loading the unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked).

Once installed, sign into Xbox.com and go to a game's achievement page like [this one](https://account.xbox.com/en-US/Achievements/XboxOne/1144039928). You can even go to a comparison page with a friend like [this](https://account.xbox.com/en-US/Compare/XboxOne/1144039928?gamertag=major%20nelson).

You should then see a box embedded in the page titled *Xbox Achievement Enhancement Suite*.  

Click the buttons to filter the items and search the titles and descriptions in the text box for further filtering.  

Each achievement also has a guide button that will link you to relevant Google search results.

## How do I contribute?

If you are a developer, then feel free to submit a pull request. See our wishlist below for changes we want to make.

Otherwise, if you have an idea or found a bug, then submit it to the issue tracker.

## Permissions explained

We are not tracking your browser history.  The permissions for this extension are used to only load the scripts when you are on the relevant pages as to not slow down your browser when they not needed.

We are using Google Analytics to see how many people are using the extension. We can see the paths you go to on https://account.xbox.com, but not any data or personal information.

## Wishlist

- Remove Zepto dependency.
- Load analytics remotely.
- Minimize permissions.
