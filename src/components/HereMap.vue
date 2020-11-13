<template>
  <div id="map">
    <h2>Require assistance with the application? Approach our ambassadors at any of these 8 locations!</h2>
    <div ref="map" style="height:600px;width:100%"></div>
  </div>
</template>

<script>
export default {
    name: "HereMap",
    data() {
        return {
            platform: {},
            map: {},
        }
    },
    mounted() {
        const platform = new window.H.service.Platform({
            "apiKey": "eSOYf9qKwUkPXJJP_5sYr1fVm1j0LnWR0S2Brl73QTA"
        });
        this.platform = platform;
        this.initializeHereMap();
    },
    methods: {
      initializeHereMap() {
        this.map = new window.H.Map(
            this.$refs.map,
            this.platform.createDefaultLayers().vector.normal.map,
            {
                zoom: "11",
                center: {lat:"1.3521",lng:"103.8198"}
            }
        );
        this.map.addObject(new window.H.map.Marker({lat:1.3668,lng:103.8407})); //Ang Mo Kio CC
        this.map.addObject(new window.H.map.Marker({lat:1.3521,lng:103.9408})); //Our Tampines Hub
        this.map.addObject(new window.H.map.Marker({lat:1.3935,lng:103.9135})); //Punggol CC
        this.map.addObject(new window.H.map.Marker({lat:1.4396,lng:103.7882})); //Woodlands CC
        this.map.addObject(new window.H.map.Marker({lat:1.3950,lng:103.7447})); //Yew Tee CC
        this.map.addObject(new window.H.map.Marker({lat:1.3486,lng:103.7114})); //Boon Lay CC
        this.map.addObject(new window.H.map.Marker({lat:1.3028,lng:103.8636})); //Kampong Glam 
        this.map.addObject(new window.H.map.Marker({lat:1.30905939946,lng:103.793063494})); //Buona Vista CC
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