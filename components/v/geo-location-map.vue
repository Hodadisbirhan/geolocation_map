<template>
  <div class="w-full h-full">
    <l-map
      :options="{ zoomControl: false }"
      class="z-0 w-full"
      :maxZoom="maxZoom"
      :zoom="6"
      :minZoom="minZoom"
      :center="[center.lat, center.lng]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-zoom position="bottomright"></l-control-zoom>
      <l-control-scale
        position="topright"
        :imperial="true"
        :metric="false"
      ></l-control-scale>
      <l-marker
        v-for="item in information"
        :key="item.id"
        :lat-lng="[item.lat, item.lng]"
      >
        <l-popup v-if="item?.popup">
          <slot name="popup" :popup="item.popup"> </slot>
        </l-popup>
        <l-tooltip
          v-if="item.tooltip"
          :options="{ permanent: item.isPersistenceTooltip, interactive: true }"
        >
          <slot name="tooltip" :tooltip="item.tooltip" />
        </l-tooltip>
      </l-marker>
      <l-polyline
        v-if="polyline"
        :latLngs="polyline"
        :color="polylineColor"
        class="h-[0.1px]"
      >
        <l-marker
          v-for="(point, index) in polylinePoints"
          :key="index"
          :latLng="[point.lat, point.lng]"
        >
          <l-popup>
            <slot name="popupPolyline" :popup_data="point.popup_info"></slot>
          </l-popup>

          <l-tooltip :options="{ permanent: true, interactive: true }">
            <slot name="tooltipPolyline" :tooltip_data="point.tooltip"></slot>
          </l-tooltip>
        </l-marker>
      </l-polyline>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import {
  LPolyline,
  LMap,
  LTileLayer,
  LCircle,
  LControlZoom,
  LMarker,
  LControlScale,
  LTooltip,
  LPopup,
  LIcon,
} from "@vue-leaflet/vue-leaflet";

import {tooltip} from "leaflet"


interface CenterLocation {
  lat: number;
  lng: number;
}

interface Point {
  lng: number;
  lat: number;
  popup_info?: any;
  tooltip?: any;
}

interface InformationInterface {
  id?: number | string;
  lat: number;
  lng: number;
  icon?: string;
  tooltip?: any;
  isPersistenceTooltip: boolean;
  popup?: any;
}

interface PropsInterface {
  center: CenterLocation;
  information?: Array<InformationInterface>;
  maxZoom: number;
  minZoom?: number;
  polylinePoints?: Array<Point>;
  polylineColor?: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {});

const polyline = computed(() => {
  if (props.polylinePoints?.length)
    return props.polylinePoints?.map((point) => {
      return [point.lat, point.lng];
    });

  return [];
});

// const toolTipForPolyline = computed(() => {
//   if (props.polylinePoints?.length)
//     return props.polylinePoints?.map((element) => {
//       return element.tooltip;
//     });

//   return [];
// });

// const popupForPolyline = computed(() => {
//   if (props.polylinePoints?.length)
//     return props.polylinePoints?.map((element) => {
//       return element.popup_info;
//     });
//   return [];
// });
</script>
