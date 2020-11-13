<template>
  <div id="map">
    <h2>Require assistance with the application? Approach our ambassadors at any of these 8 locations!</h2>
    <div ref="hereMap" style="height:600px;width:100%"></div>
  </div>
</template>

<script>
export default {
    name: "HereMap",
    data() {
        return {
            platform: {}
        }
    },
    mounted() {
        const platform = new window.H.service.Platform({
            apikey: "eSOYf9qKwUkPXJJP_5sYr1fVm1j0LnWR0S2Brl73QTA"
        });
        this.platform = platform;
        this.initializeHereMap();
    },
    methods: {
      initializeHereMap() {
        const mapContainer = this.$refs.hereMap;
        const H = window.H;
        var maptypes = this.platform.createDefaultLayers();
        var map = new H.Map(mapContainer, maptypes.vector.normal.map,
            {
                zoom: "11",
                center: {lat:"1.3521",lng:"103.8198"}
            }
        );
        map.addObject(new H.map.Marker({lat:1.3668,lng:103.8407})); //Ang Mo Kio CC
        map.addObject(new H.map.Marker({lat:1.3521,lng:103.9408})); //Our Tampines Hub
        map.addObject(new H.map.Marker({lat:1.3935,lng:103.9135})); //Punggol CC
        map.addObject(new H.map.Marker({lat:1.4396,lng:103.7882})); //Woodlands CC
        map.addObject(new H.map.Marker({lat:1.3950,lng:103.7447})); //Yew Tee CC
        map.addObject(new H.map.Marker({lat:1.3486,lng:103.7114})); //Boon Lay CC
        map.addObject(new H.map.Marker({lat:1.3028,lng:103.8636})); //Kampong Glam 
        map.addObject(new H.map.Marker({lat:1.30905939946,lng:103.793063494})); //Buona Vista CC
        addEventListener("resize", () => map.getViewPort().resize());
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        H.ui.UI.createDefault(map, maptypes);
      }
      
    }
}
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
}
</style>