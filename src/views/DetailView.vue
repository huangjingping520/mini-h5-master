<template>
  <div class="banner">
    <div class="circle">
      <img src="../assets//猫砂.png" alt="">
    </div>
  </div>
  <div class="product-type">
    <div class="product">
      <div class="product-name">petshy钠基矿石猫砂</div>
      <div class="points">
        <span class="points-num">100</span>
        <span>积分</span>
      </div>
    </div>
    <div class="take">
      <div class="left">
        <span class="take-count">已领取10345份</span>
        <span class="watch-count"><img src="../assets/20230712-103428.png" alt=""><span>1.3w</span></span>
      </div>
      <button class="right">立刻领取</button>
    </div>
  </div>
  <div class="intro">
    <img src="../assets/产品简介字.png" alt="" class="title">
    <div class="detail">
      <img src="../assets/IMG_6959.png" alt="" class="detail-img">
      <!-- <img src="../assets/IMG_6960.png" alt="" class="detail-img">
      <img src="../assets/IMG_6964.png" alt="" class="detail-img"> -->
    </div>
  </div>
  <div class="tips"></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;

  .circle {
    display: flex;
    justify-content: center;
    flex: 1;
    background-image: url(../assets/椭圆形.png);
    background-repeat: no-repeat;
    background-position: center;
  }
}

.product-type {
  display: flex;
  flex-wrap: wrap;
  margin: 48px auto 28px auto;
  padding: 124px 36px 56px 53px;
  box-sizing: border-box;
  width: 674px;
  height: 300px;
  background-image: url(../assets/hot.png);
  background-size: contain;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  // padding: 0 10px;
  justify-content: space-between;

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .product-name {
      color: rgb(0, 0, 0);
      font-family: PingFang SC;
      font-size: 40px;
      text-align: left;
    }

    .points {
      color: rgb(147, 32, 255);
      font-family: FZLTZCHK;
      font-size: 26.4px;
      text-align: left;

      .points-num {
        font-size: 42.3px;
      }
    }
  }

  .take {
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    // vertical-align: middle;
    width: 100%;

    // text-align: center;
    .left {
      height: 100%;

      // vertical-align: middle;
      // text-align: center;
      .take-count {
        opacity: 0.5;
        color: rgb(0, 0, 0);
        font-family: PingFang SC;
        font-size: 24px;
        margin-right: 4px;
      }

      .watch-count {
        text-align: center;
        // vertical-align: middle;
        opacity: 0.5;
        height: 100%;

        span {
          color: rgb(147, 32, 255);
          font-family: FZLTZCHK;
          font-size: 24px;
          text-align: left;
        }

        img {
          width: 28px;
          height: 28px;
          background: rgb(147, 32, 255);
        }
      }
    }

    .right {
      width: 147px;
      height: 45px;
    }
  }
}

.intro {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 674px;
  margin: 0 auto 39px auto;
  background-image: url(../assets/产品2.png);
  background-repeat: no-repeat;
  flex-direction: row;
  justify-content: center;
  /* background-size: contain; */

  .title {
    margin: 40px 15.93px 29.13px 17px;
    // width: 641.07px;
    height: 52.86px;

  }

  .detail {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    img {
      width: 100%;
    }
  }
}

.tips {
  width: 674px;
  height: 261px;
  margin: 0 auto;
  background-image: url(../assets/温馨1.png);
  background-size: contain;

  // // border: 1px solid black;
  // border-radius: 1rem;
  // padding: 10px;
}
</style>
