<template>
  <div id="map">
    <h2>Need help with the application paperwork? Approach our ambassadors at any of these 8 locations!</h2>
    <div id="hereMap" style="height:600px;width:100%"></div>
    <h3>
    Ang Mo Kio CC: 795 Ang Mo Kio Avenue 1, 569976<br>
    Boon Lay CC: 10 Boon Lay Place, 649882<br>
    Buona Vista CC: 36 Holland Drive, 270036<br>
    Kampong Glam CC: 385 Beach Road, 199581<br>
    Our Tampines Hub: 1 Tampines Walk, 528523<br>
    Punggol CC: 3 Hougang Avenue 6, 538808<br>
    Woodlands CC: 1 Woodlands Street 81, 738526<br>
    Yew Tee CC: 20 Chua Chu Kang Street 52, 689286
    </h3>
  </div>
</template>

<script>
export default {
    name: "HereMap",
    data() {
        return {
            platform: {},
            map:{}
        }
    },
    mounted() {
        this.platform = new window.H.service.Platform({
            apikey: "eSOYf9qKwUkPXJJP_5sYr1fVm1j0LnWR0S2Brl73QTA"
        });
        this.initializeMap();
    },
    methods: {
      initializeMap() {
        var container = document.getElementById('hereMap')
        var maptypes = this.platform.createDefaultLayers();
        this.map = new window.H.Map(container, maptypes.vector.normal.map,
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
        addEventListener("resize", () => this.map.getViewPort().resize());
        new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
        window.H.ui.UI.createDefault(this.map, maptypes);
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