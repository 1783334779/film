<template>
    <div>
   <!-- <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>            -->
   <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
    </div>
</template>
<script>
export default {
    props:{
    focused:true,
    selectedImage:{default:""},
    normalImage:{default:""}
  },
  created() {
    console.log(this.focused)
  },
}
</script>
<style>
    .imgstyle{
   width:20px;
   height:20px;
 }
</style>