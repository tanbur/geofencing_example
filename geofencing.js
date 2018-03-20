function inside(point, vs) {
  // ray-casting algorithm based on
  // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
  var x = point[0], y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];

      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};

function coordinatesToPolygon(coordinateArray, projection, swapValues=false) {
  // Take lat long and spit out a polygon you can plot
  // Swap over lat long to long lat
  // Also transforms the coordinates
  var wgs84Proj = new ol.proj.Projection({ code : "EPSG:4326" });
  if(swapValues === true) {
    coordinateArray = coordinateArray.map(coord => [coord[1], coord[0]]);
  };
  var poly = new ol.geom.Polygon([coordinateArray]);
  poly.transform(wgs84Proj, projection);
  return poly;
}
