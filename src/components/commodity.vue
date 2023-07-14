<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
// import { getNewGoods } from '@/api/getGoods';

import { getType } from '@/utils/getType'
// import service from '@/utils/axios';
const phoneType = getType()


// const getGoods = () => {

//   const files = ref([])
//   const filesName = ref([])
//   service.post('/api/test/getNewGoods', { model: phoneType }).then(({ data }) => {
//     // console.log(data)
//     files.value = data.files
//     filesName.value = data.filesName
//   })

//   return { files, filesName }
// }

// console.log(getGoods())

const newIphone = {
  "files": [
    "FS13",
    "FS15",
    "FS08",
    "FS16"
  ],
  "filesName": [
    "早c晚a茶刺梨",
    "维达抽纸",
    "奶酪夹心涂层饼干",
    "舒莱轻氧透气卫生巾"
  ]
}

const newHuawei = {
  "files": [
    "FS16",
    "FS12",
    "FS11",
    "FS14"
  ],
  "filesName": [
    "舒莱轻氧透气派日夜组合卫生巾8包64片超薄透气姨妈巾防侧漏学生 1件装",
    "西梅汁益生元浓缩果汁原浆果饮纤维果饮官方旗舰店正品",
    "米蓓尔蓝绷带涂抹面膜小样6g*5片补水保湿舒缓修护",
    "巴西莓粉果蔬纤维粉膳食纤维粉代餐冲饮官方正品20条/盒"
  ]
}

const newQita = {
  "files": [
    "FS11",
    "FS14",
    "FS12",
    "FS15"
  ],
  "filesName": [
    "米蓓尔蓝绷带涂抹面膜小样6g*5片补水保湿舒缓修护",
    "巴西莓粉果蔬纤维粉膳食纤维粉代餐冲饮官方正品20条/盒",
    "西梅汁益生元浓缩果汁原浆果饮纤维果饮官方旗舰店正品",
    "维达抽纸棉韧立体美餐巾纸 3层90抽*5包u"
  ]
}

const hotIphone = {
  "files": [
    "FS03",
    "FS01",
    "FS04",
    "FS07"
  ],
  "filesName": [
    "安慕希旗舰店希腊风味清甜菠萝味酸奶205g*3",
    "老金磨方玉米须茶茯苓赤小豆苦荞麦茶茯苓栀子利水茶茶包",
    "日本进口大冢饼干caloriemate营养代餐饼干饱腹单盒",
    "SUNTORY三得利乌龙茶500ml*3瓶装茶饮料无糖低糖DIY牛奶饮料U"
  ],
  "filesIntroduction": []
}

const hotHuawei = {
  "files": [
    "FS02",
    "FS07",
    "FS04",
    "FS03"
  ],
  "filesName": [
    "轻吖吖姜黄奶冲饮无添加糖生酮超级混合粉办公室便携免煮黄金奶饮",
    "SUNTORY三得利乌龙茶500ml*3瓶装茶饮料无糖低糖DIY牛奶饮料U",
    "日本进口大冢饼干caloriemate营养代餐饼干饱腹单盒",
    "安慕希旗舰店希腊风味清甜菠萝味酸奶205g*3"
  ],
  "filesIntroduction": []
}

const hotQita = {
  "files": [
    "FS03",
    "FS04",
    "FS05",
    "FS06"
  ],
  "filesName": [
    "安慕希旗舰店希腊风味清甜菠萝味酸奶205g*3",
    "日本进口大冢饼干caloriemate营养代餐饼干饱腹单盒",
    "哪吒欧椰烤椰奶椰汁零乳糖植物蛋白椰乳饮料夏日整箱",
    "老金磨方玉米须茶茯苓赤小豆苦荞麦茶茯苓栀子利水茶茶包"
  ],
  "filesIntroduction": []
}

const brandIphone = {
  "files": [
    "FS19",
    "FS17",
    "FS20",
    "FS18"
  ],
  "filesName": [
    "植护400张大包纸巾抽纸家用实惠装整箱批婴儿面巾纸卫生纸餐巾纸",
    "日本进口龙角散无糖薄荷糖网红零食嗓子咽喉含片润喉糖糖果压片糖",
    "烟熏色高颜值修正带ins日系少女心大容量涂改带学生用迷你改正带",
    "欧莱雅垂顺大金瓶洗发水100ml*2"
  ],
  "filesIntroduction": []
}

const brandHuawei = {
  "files": [
    "FS17",
    "FS19",
    "FS20",
    "FS18"
  ],
  "filesName": [
    "日本进口龙角散无糖薄荷糖网红零食嗓子咽喉含片润喉糖糖果压片糖",
    "植护400张大包纸巾抽纸家用实惠装整箱批婴儿面巾纸卫生纸餐巾纸",
    "烟熏色高颜值修正带ins日系少女心大容量涂改带学生用迷你改正带",
    "欧莱雅垂顺大金瓶洗发水100ml*2"
  ],
  "filesIntroduction": []
}

const brandQita = {
  "files": [
    "FS19",
    "FS18",
    "FS20",
    "FS17"
  ],
  "filesName": [
    "植护400张大包纸巾抽纸家用实惠装整箱批婴儿面巾纸卫生纸餐巾纸",
    "欧莱雅垂顺大金瓶洗发水100ml*2",
    "烟熏色高颜值修正带ins日系少女心大容量涂改带学生用迷你改正带",
    "日本进口龙角散无糖薄荷糖网红零食嗓子咽喉含片润喉糖糖果压片糖"
  ],
  "filesIntroduction": []
}

let newFiles: string[] = []
let newFilesName: string[] = []

let hotFiles: string[] = []
let hotFilesName: string[] = []

let brandFiles: string[] = []
let brandFilesName: string[] = []

if (phoneType === 'Iphone') {
  newFiles = newIphone.files
  hotFiles = hotIphone.files
  brandFiles = brandIphone.files
  newFilesName = newIphone.filesName
  hotFilesName = hotIphone.filesName
  brandFilesName = brandIphone.filesName
} else if (phoneType === 'Huawei') {
  newFiles = newHuawei.files
  hotFiles = hotHuawei.files
  brandFiles = brandHuawei.files
  newFilesName = newHuawei.filesName
  hotFilesName = hotHuawei.filesName
  brandFilesName = brandHuawei.filesName
} else {
  newFiles = newQita.files
  hotFiles = hotQita.files
  brandFiles = brandQita.files
  newFilesName = newQita.filesName
  hotFilesName = hotQita.filesName
  brandFilesName = brandQita.filesName
}

// console.log(goods)

let tagButton = ref('上新推荐')
function click() {
  router.push('/about')
}
function tagClick(id: string) {
  if (id === 'newTag') {
    tagButton.value = '上新推荐'
  } else if (id === 'hotTag') {
    tagButton.value = '热门产品'
  } else {
    tagButton.value = '品牌推广'
  }
  document.getElementById(id)?.scrollIntoView()
}
// const newGood = 




</script>

<template>
  <div class="commodity">
    <div class="newTag" :style="{ backgroundImage: `url(/src/assets/${tagButton}.png)` as any }">
      <div class="newButton" @click="tagClick('newTag')"></div>
      <div class="hotButton" @click="tagClick('hotTag')"></div>
      <div class="brandButton" @click="tagClick('brandTag')"></div>
    </div>
    <!-- 上新推荐 -->
    <div id="newTag" class="tagDetail">
      <img src="" alt="">
      <div class="tagDetailImgWrap">
        <div class="tagDetailImgItems">
          <div @click="click" id='' class="productDetailWrap">
            <div class="productDetailWrapLeft">
              <img :src="`http://36.133.227.145:8000/getPhoto/${newFiles[0]}`" alt="" class="newImg">
            </div>
            <div class="productDetailWrapRight">
              <h3>{{ newFilesName[0] }}</h3>
              <div class="getButton">立即领取</div>
            </div>
          </div>
          <div @click="click" class="productDetailWrap">
            <div class="productDetailWrapLeft">
              <img :src="`http://36.133.227.145:8000/getPhoto/${newFiles[1]}`" alt="" class="newImg">
            </div>
            <div class="productDetailWrapRight">
              <h3>{{ newFilesName[1] }}</h3>
              <div class="getButton">立即领取</div>
            </div>
          </div>
        </div>
        <div class="tagDetailImgItems">
          <div @click="click" class="productDetailWrap">
            <div class="productDetailWrapLeft">
              <img :src="`http://36.133.227.145:8000/getPhoto/${newFiles[2]}`" alt="" class="newImg">

            </div>
            <div class="productDetailWrapRight">
              <h3>{{ newFilesName[2] }}</h3>
              <div class="getButton">立即领取</div>
            </div>

          </div>
          <div @click="click" class="productDetailWrap">
            <div class="productDetailWrapLeft">
              <img :src="`http://36.133.227.145:8000/getPhoto/${newFiles[3]}`" alt="" class="newImg">
            </div>
            <div class="productDetailWrapRight">
              <h3>{{ newFilesName[3] }}</h3>
              <div class="getButton">立即领取</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- 热门产品 -->
    <div id="hotTag" @click="click" class="hotTagDetailWrap">
      <div class="hotTagWrap">
        <div style="width: 240px; height: 240px;">
          <img :src="`http://36.133.227.145:8000/getPhoto/${hotFiles[0]}`" alt="" class="hotImg">
        </div>
        <div class="hotTagDetailWarp">
          <h3>{{ hotFilesName[0] }}</h3>
          <div class="hotProButton">立即领取</div>
        </div>
      </div>
    </div>
    <!-- 品牌推广 -->
    <div id="brandTag" @click="click" class="hotTagDetailWrap">
      <div class="brandTagWrap">
        <div style="width: 240px; height: 240px;">
          <img :src="`http://36.133.227.145:8000/getPhoto/${brandFiles[0]}`" alt="" class="hotImg">
        </div>
        <div class="hotTagDetailWarp">
          <h3>{{ brandFilesName[0] }}</h3>
          <div class="hotProButton">立即领取</div>
        </div>
      </div>
    </div>
    <h2>下拉到底啦</h2>
  </div>
</template>
<style scoped>
.commodity {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

h2 {
  color: rgb(147, 32, 255);
  opacity: 0.2;
}

img {
  height: 80px;
}

.commodityTag {
  height: 130px;
  width: 711px;
  display: flex;
  position: sticky;
  top: 0;
  gap: 80px;
  background-image: url('../assets/上新推荐.png');
  background-size: contain;
  flex-direction: row;
  justify-content: center;
}

.newTag {
  height: 102px;
  width: 674px;
  display: flex;
  position: sticky;
  top: 0;
  gap: 80px;
  background-image: url('../assets/上新推荐.png');
  background-size: contain;
  flex-direction: row;
  justify-content: center;
}

.hotTag {
  height: 130px;
  width: 711px;
  display: flex;
  position: sticky;
  top: 0;
  gap: 80px;
  background-image: url('../assets/热门产品.png');
  background-size: contain;
  flex-direction: row;
  justify-content: center;
}

.brandTag {
  height: 130px;
  width: 711px;
  display: flex;
  position: sticky;
  top: 0;
  gap: 80px;
  background-image: url('../assets/品牌推广.png');
  flex-direction: row;
  justify-content: center;
}

.newButton {
  width: 100px;
}

.hotButton {
  width: 100px;
}

.brandButton {
  width: 100px;
}

.commodityTag button {
  display: block;
  height: 2rem;
  width: 6rem;
}

.tagDetail {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
}

.tagDetailImgWrap {
  display: flex;
  width: 674px;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('../assets/上新2.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 137px;
  gap: 28px;
  padding-bottom: 100px;
  margin-top: 0;
}

.productDetailWrap {
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column; */
  align-content: center;
  align-items: center;
  width: 280px;
  height: 185.83px;
  background-color: white;
  border-radius: 14px;
}

.productDetailWrapLeft {
  float: left;
  margin-top: 23px;
  margin-left: 8px;
  margin-right: 12px;
}

.productDetailWrapRight {
  display: flex;
  flex-direction: column;
  font-size: 17.5px;
  margin-top: 23px;
}

.productDetailWrapRight h3 {
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-line-clamp: 2;

  overflow: hidden;

  /*! autoprefixer: off */

  -webkit-box-orient: vertical;
}


.newImg {

  width: 153px;
  height: 145px;
}

.hotImg {
  width: 100%;
  height: 100%;
}

.tagDetailImgItems {
  display: flex;
  flex-direction: row;
  gap: 28px;
}

.hotTagWrap {
  display: flex;
  flex-direction: row;
  gap: 10%;
  background-image: url('../assets/热门3.png');
  width: 674px;
  padding-bottom: 200px;
  background-repeat: no-repeat;
  background-size: contain;
}

.hotTagDetailWarp {
  display: flex;
  width: 100%;
  font-size: 17.5px;
  padding-top: 120px;
  padding-right: 40px;
  flex-direction: column;
  margin-left: 40px;
  /* justify-content: center;
  align-items: center; */
}

.hotProButton {
  background-color: rgb(255, 172, 20);
  width: 147px;
  height: 45px;
  border-radius: 19px;
  line-height: 45px;
  text-align: center;
  color: white;
  font-size: 25px;
  margin-top: 60px;
  margin-left: 80px;
}

.hotTagDetailWrap img {
  margin-left: 39px;
  margin-top: 100px;
  width: 300px;
}

.brandTagWrap {
  display: flex;
  flex-direction: row;
  gap: 10%;
  background-image: url('../assets/品牌3.png');
  width: 674px;
  padding-bottom: 200px;
  background-repeat: no-repeat;
  background-size: contain;


}

.brandTagWrap img {
  margin-left: 39px;
  margin-top: 100px;
  width: 300px;
}

.brandTagDetailWrap {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.getButton {
  background-color: rgb(147, 32, 255);
  width: 92px;
  height: 28px;
  border-radius: 19px;
  line-height: 28px;
  text-align: center;
  color: white;
}

.productInto {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
