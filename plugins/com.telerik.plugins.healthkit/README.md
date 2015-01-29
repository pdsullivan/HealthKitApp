# Cordova HealthKit Plugin

<img src="img/healthkit-hero_2x.png" width="128px" height="128px"/>


<table width="100%">
    <tr>
        <td width="100"><a href="http://plugins.telerik.com/plugin/healthkit"><img src="http://www.x-services.nl/github-images/telerik-verified-plugins-marketplace.png" width="97px" height="71px" alt="Marketplace logo"/></a></td>
        <td>For a quick demo app and easy code samples, check out the plugin page at the Verified Plugins Marketplace: http://plugins.telerik.com/plugin/healthkit</td>
    </tr>
</table>


### Supported functions:
* `available`: check if HealthKit is supported (iOS8+, not on iPad)
* `requestAuthorization`: ask some or all permissions up front, [see the example](demo/index.html)
* `readDateOfBirth`: formatted as yyyy-MM-dd
* `readGender`: output = male|female|unknown
* `readWeight`: pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
* `saveWeight`: pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
* `readHeight`: pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
* `saveHeight`: pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
* `saveWorkout`: [see the example](demo/index.html) for instructions
* `findWorkouts`: no params yet, so this will return all workouts ever of any type
* `querySampleType`: [see the example](demo/index.html). Note that you need to call `requestAuthorization` first in this version of the plugin.
* `sumQuantityType`: not documented yet
* `monitorSampleType`:  not documented yet

## Tips
* Make sure your app id has the 'HealthKit' entitlement when this plugin is installed.
* Also, make sure your app and AppStore description complies with these Apple review guidelines: https://developer.apple.com/app-store/review/guidelines/#healthkit
