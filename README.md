# Geofencing

This is an example script that shows how to implement geofencing using OpenLayers v4 and OpenStreetMap. In addition to showing useful debugging stats, it also shows how one might use closures to write functions that will only be called once - useful when building adventures :wink:


See the [Camden Adventure](https://tanbur.github.io/geofencing_example).

Note:
1. The "Camden Town Hall" tag will appear and disappear as you enter and leave the town hall.
1. The "auditorium" tag will appear *once*, the first time you enter the auditorium, and disappear whenever you leave it.
1. The "small park" tag will appear when you enter the park for the first time, and won't disappear.
1. The "Brunswick Square" tag will appear/disappear upon entering/leaving. Same as the Camden Town Hall.

## Onigo Example

The [Onigo Example](https://tanbur.github.io/geofencing_example/example_onigo) is a more bespoke example script for Onigo-like adventures.
The tags are as above, except the code will sequentially hide and show the tags/instructions while popping the sections so they don't get retriggered.
This code lives in the ```example_onigo``` script.


## Polygon Selection

The [polygon selection tool](https://tanbur.github.io/geofencing_example/polygon_selection) is great for easily selecting polygons for use in geofencing. This code lives in the ```polygon_selection``` script.
