<template>
  <div class="profile">
    <AwHeader class="profile_header"></AwHeader>
    <div class="box">
      <div class="card" data-state="#about">
        <div class="card-header">
          <div
            class="card-cover"
            
          ></div>
          <img
            class="card-avatar"
            src="@/assets/img/index/app1.jpg"
            alt="avatar"
          />
          <h1 class="card-fullname">{{userData.fullname}}</h1>
          <h2 class="card-jobtitle">{{userData.username}}</h2>
        </div>
        <div class="card-main">
            <div class="card-content">
              <div class="card-subtitle">{{$t('profile.contact')}}</div>
              <div> {{$t('profile.email')}}:<span class="card-desc">
                {{userData.email}}
              </span></div>
              <div>{{$t('profile.tele')}}:<span class="card-desc">{{userData.phone}}</span></div>
              <div>{{$t('profile.com')}}:<span class="card-desc">{{userData.company}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AwHeader from "../../components/web/public/Header";
export default {
  name: "profile",
  components: {
    AwHeader,
  },
  data() {
    return {
      userData:this.$store.state.auth.userData
    };
  },

  // methods: {
  // },
  // mounted(){
  //   this.userData=this.$store.state.auth.userData
  //   console.log(`output->this.userData`,this.userData)
  // }
};
</script>

<style lang="less" scoped>
.profile_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  //border-bottom: 1px solid #eff0f1;
}
.box {
  width: 100%;
  height: 55vh;
  padding-top: 28vh;
  background: url("../../assets/img/news/newsbanner.jpg") 50%;
  background-size: cover;
}
.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: white;
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}
.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;
}
.card-header * {
  transition: 0.3s;
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
  background-image: url('../../assets/img/index/background.png');
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}
.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}
.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}
</style>