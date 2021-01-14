<template>
  <div>
    <div class="footer ">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="footer-item">
              <div class="h5">關於我們</div>
              <div>
                <i class="fas fa-phone"></i>
                (02)2995-2225
              </div>
              <div>
                <i class="fas fa-fax"></i>
                (02)2995-2226
              </div>
              <div>
                <i class="fas fa-envelope"></i>
                lin70208@gmail.com
              </div>
              <div>
                <i class="fas fa-clock"></i>
                週一至週五AM:8:30-18:00
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer-item">
              <div class="h5">產品須知</div>
              <div>
                <a href="#" class="footer-link">品牌故事</a>
              </div>
              <div>
                <a href="#" class="footer-link">門市據點</a>
              </div>
            </div>
          </div>
        </div>
        <hr>
        Copyright © 2021 Blackfloat
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.h5 {
  color: #000;
}
.footer {
  color: #808080;
  background-color: #e2e2e2;
}
.footer-item {
  padding: 2em;
  font-size: 13px;
}
.footer-link {
  color: #808080;
  &:hover {
    color: #000;
    text-decoration: none;
  }
}
</style>