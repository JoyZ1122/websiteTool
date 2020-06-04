<template>
  <div class="scroll-y">
    <template v-for="(comp, idx) in compList">
      <!--占位提示控件-->

      <div
        v-if
        :class="['tpl-container', comp.active ? 'current' : '']"
        :data-index="idx"
        @click.capture="clickComp"
      >
        <!--文本控件-->
        <base-text v-if="comp.type === 'text'" :component="comp"></base-text>
        <!--图片控件-->
        <base-image v-if="comp.type === 'img'" :component="comp"></base-image>
        <!--表单控件-->
        <base-form v-if="comp.type === 'form'" :component="comp"></base-form>
        <!--轮播图控件-->
        <swiper-banner v-if="comp.type === 'swiper-banner'" :component="comp"></swiper-banner>
        <!--楼层导航控件-->
        <floor-menu v-if="comp.type === 'floor-menu'" :component="comp"></floor-menu>
        <!--横向滚动控件-->
        <scroll-left v-if="comp.type === 'scroll-left'" :component="comp"></scroll-left>
        <!--倒计时控件-->
        <timeout v-if="comp.type === 'timeout'" :component="comp"></timeout>
        <!--滚动新闻控件-->
        <news-marquee v-if="comp.type === 'news-marquee'" :component="comp"></news-marquee>
        <!--金刚位控件-->
        <grid-menu v-if="comp.type === 'grid-menu'" :component="comp"></grid-menu>
        <!--页面标题-->
        <page-title v-if="comp.type === 'page-title'" :component="comp"></page-title>
        <!--页面段落-->
        <page-paragraph v-if="comp.type === 'page-paragraph'" :component="comp"></page-paragraph>
        <!--页面引言-->
        <page-intro v-if="comp.type === 'page-intro'" :component="comp"></page-intro>
        <!--页面FAQ-->
        <page-faq v-if="comp.type === 'page-faq'" :component="comp"></page-faq>
        <!--横向列表-->
        <horizontal-list v-if="comp.type === 'horizontal-list'" :component="comp"></horizontal-list>
        <!--纵向列表-->
        <vertical-list v-if="comp.type === 'vertical-list'" :component="comp"></vertical-list>

        <!--控件操作-->
        <!-- <div class="comp-menu">
            <a href="javascript:void(0)" :class="[idx == 1 ? 'disabled' : '']" @click="upComp(idx)">
              <span class="tips">上移</span>
              <i class="fa fa-arrow-circle-up"></i>
            </a>
            <a
              href="javascript:void(0)"
              :class="[idx == compList.length - 2 ? 'disabled' : '']"
              @click="downComp(idx)"
            >
              <span class="tips">下移</span>
              <i class="fa fa-arrow-circle-down"></i>
            </a>
            <a href="javascript:void(0)" @click="delComp(idx)">
              <span class="tips">删除</span>
              <i class="fa fa-trash"></i>
            </a>
        </div>-->
      </div>
    </template>
  </div>

  <!--底部导航控件-->
  <!-- <div
      v-if="bottomMenu"
      :class="['absolute-tpl', bottomMenu.active ? 'current' : '']"
      @click="clickBtmMenu"
    >
      <bottom-menu :component="bottomMenu"></bottom-menu>
      <div class="comp-menu">
        <a href="javascript:void(0)" @click="delBtmMenu">
          <span class="tips">删除</span>
          <i class="fa fa-trash"></i>
        </a>
      </div>
  </div>-->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      compList: []
    };
  },
  mounted() {
    this.compList = JSON.parse(localStorage.getItem("pageDateSet")).config;
    console.log(this.compList);
  },
  methods: {
    clickComp(e) {
      //   if (this.bottomMenu) this.bottomMenu.active = false;
      const idx = parseInt(e.currentTarget.dataset.index);
      this.compList.forEach((val, index) => {
        if (index === idx) {
          val.active = true;
          this.currentIndex = index;
          this.currentConfig = val;
        } else {
          val.active = false;
        }
      });
    }
  }
};
</script>