
<script>
  module.exports = {
    props: {
      title: Number,
    },
    data: function () {
      return {
        active: false,
      }
    }
  }
</script>

<template>
  <div class="content">
    <div class="section_title_wrapper flex_row justify_center">
      <span class="line"></span>
      <span class="title">{{title}}</span>
      <span class="line"></span>
    </div>
  </div>

</template>
