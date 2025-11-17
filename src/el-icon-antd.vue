<template>
  <el-icon :size="size" :color="color">
    <div v-html="svgIcon"></div>
  </el-icon>
</template>

<script>
export default {
  props: {
    iconData: {
      type: Object,
      required: true
    },
    size: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    svgIcon() {
      if (!this.iconData) return "";
      let iconSvg = this.iconData.icon;
      if (typeof this.iconData.icon === "function") {
        iconSvg = this.iconData.icon('#1677ff', '#e6f4ff');
      }
      const { tag, attrs, children } = iconSvg;

      let svgAttrs = Object.entries(attrs)
        .map(([key, value]) => key + '="' + value + '"')
        .join(" ");

      const svgChildren = children.map(child => {
        const childAttrs = Object.entries(child.attrs)
          .map(([key, value]) => key + '="' + value + '"')
          .join(" ");
        return "<" + child.tag + " " + childAttrs + "></" + child.tag + ">";
      }).join("");

      return "<" + tag + " " + svgAttrs + ">" + svgChildren + "</" + tag + ">";
    }
  }
};
</script>
