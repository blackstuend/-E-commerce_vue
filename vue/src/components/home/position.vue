<template>
  <div>
    <div class="banner h1 text-center text-white mb-0">
        Contact Us
    </div>
    <div class="contact py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="h3 px-2 topics">聯絡我們</div>
            <div class="h4 px-2 topics mt-4">客服資訊</div>
            <div class="px-3 mb-5">
              公司電話：(02)2995-2225<br />
              客服時間： 週一至週五AM:8:30-18:00
            </div>
            <hr />
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.552154819833!2d118.31765229153129!3d24.431621463944946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a36f4474e36d%3A0x5089ce90471e322d!2z6YeR5rC45Yip6Yu85YiA77yI6YeR5rC45Yip6KO95YiA6ICB6IiW77yJ!5e0!3m2!1szh-TW!2stw!4v1610603218813!5m2!1szh-TW!2stw"
                width="100%"
                height="450"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h3 px-2 topics mt-5">聯絡表單</div>
            <div class="form-group">
              <label for="name">姓名</label>
              <input
                type="text"
                name=""
                id="name"
                class="form-control"
                placeholder="請輸入姓名"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="name">電子郵件</label>
              <input
                type="text"
                name=""
                id="email"
                class="form-control"
                placeholder="請輸入你的E-MAIL"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="phone">聯絡電話</label>
              <input
                type="text"
                name=""
                id="phone"
                class="form-control"
                placeholder="請填寫聯絡電話"
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="phone">訊息內容</label>
              <textarea
                placeholder="請輸入你的訊息"
                rows="10"
                class="form-control"
              >
              </textarea>
              <button class="btn btn-warning mt-3">送出</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      value: 1,
    };
  },
  created(){
    console.log(this.$route.name)
  }
};
</script>


<style lang="scss" scoped>
.contact{
  width: 100%;
  background-color: #f9f9f9;
}
.topics {
  border-left: 3px solid orange;
  font-weight: 800;
}

.banner{
  line-height: 500px;
  width: 100%;
  height:500px;
  background-position: center center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1601091658622-09c1cf56db22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
}
</style>