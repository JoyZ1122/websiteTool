<template>
  <div :style="getStyle">这是测试模板</div>
</template>
<script>
export default {
  name: "testDemo",
  props: {
    component: {
      type: Object
    }
  },
  computed: {
    getStyle() {
      const ret = [];
      this.component.style.forEach(el => {
        const unit = el.unit || "";

        if (el.val) {
          if (el.attr === "backgroun-img") {
            ret.push(el.attr + ":url(" + el.val + ")");
          } else {
            ret.push(el.attr + ":" + el.val + unit);
          }
        }
      });
      return ret.join(";");
    }
  }
};
</script>