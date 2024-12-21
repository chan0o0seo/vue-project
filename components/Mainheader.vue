<script setup>
import { ref } from 'vue';
const show = ref(false);
const allmenu = ref(false)
const handleMouseLeave = () => {
    setTimeout(() => {
        show.value = false
    }, 350)
}

</script>

<template>
  <header class="header">
      <div class="head-inner">
          <div class="out-login-wrap">
              <button class="btn-daram" type="button">
                  DataBada
              </button>
              <ul>
                  <li>
                      <RouterLink >로그인</RouterLink>
                  </li>
                  <li>
                      <RouterLink >회원가입</RouterLink>
                  </li>
                  <li>
                      <RouterLink >고객센터</RouterLink>
                  </li>
              </ul>
          </div>
          <div class="gnb-wrap">
              <h1 class="logo-title">
                  <RouterLink 
                      ><img alt="" class="logo" src="../assets/logo/icon.png" /></RouterLink>
              </h1>
              <nav  :class="show ? 'active' : ''" class="gnb-menu" @click="show = true" @mouseleave="handleMouseLeave">
                  <ul class="menu-list">
                      <li><a href="javascript:;">Data서비스</a></li>
                      <li><a href="javascript:;">솔루션서비스</a></li>
                      <li><a href="javascript:;">광고서비스</a></li>
                      <li><a href="javascript:;">API서비스</a></li>
                      <li><a href="javascript:;">커뮤니티</a></li>
                  </ul>
                  <div class="gnb-menu-wrap">
                      <div class="gnb-menu-inner">
                          <div class="gnb-menu-list">
                              <h2 class="title"><span class="title-link">Data서비스</span></h2>
                              <ul class="dep1-list">
                                  <li class="item">
                                      <RouterLink
                                          
                                          @click.stop="show = false"
                                          >Data상품
                                      </RouterLink>
                                  </li>
                                  <li class="item">
                                      <RouterLink 
                                          >맞춤Data
                                      </RouterLink>
                                  </li>
                              </ul>
                          </div>
                          <div class="gnb-menu-list">
                              <h2 class="title"><span class="title-link">솔루션서비스</span></h2>
                              <ul class="dep1-list">
                                  <li class="item">
                                      <RouterLink
                                          @click.stop="show = false"
                                          >솔루션상품
                                      </RouterLink>
                                  </li>
                              </ul>
                          </div>
                          <div class="gnb-menu-list">
                              <h2 class="title"><a class="title-link" href="javascript:;">광고서비스</a></h2>
                              <ul class="dep1-list">
                                  <li class="item">
                                      <RouterLink
                                          >타겟마케팅
                                      </RouterLink>
                                  </li>
                                  <li class="item">
                                      <RouterLink
                                          >모바일서베이
                                      </RouterLink>
                                  </li>
                                  <li class="item">
                                      <RouterLink 
                                          >SOL페이배너광고
                                      </RouterLink>
                                  </li>
                              </ul>
                          </div>
                          <div class="gnb-menu-list">
                              <h2 class="title"><span class="title-link">API서비스</span></h2>
                              <ul class="dep1-list">
                                  <li class="item">
                                      <RouterLink
                                          
                                          @click.stop="show = false"
                                          >API상품
                                      </RouterLink>
                                  </li>
                              </ul>
                          </div>
                          <div class="gnb-menu-list">
                              <h2 class="title"><span class="title-link">커뮤니티</span></h2>
                              <ul class="dep1-list">
                                  <li class="item">
                                      <RouterLink
                                         
                                          @click.stop="show = false"
                                          >활용장
                                      </RouterLink>
                                  </li>
                                  <li class="item">
                                      <RouterLink
                                         
                                          @click.stop="show = false"
                                          >토론장
                                      </RouterLink>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </nav>
              <!-- util -->
              <div class="util-area">
                  <v-btn
                    to="/my"
                      size="x-small"
                      title="MY"
                      variant="text"
                  >
                      <v-icon class="icon-my" />
                  </v-btn>
                  <v-btn size="x-small" title="전체메뉴" variant="text" >
                      <v-icon class="icon-allmenu" />
                  </v-btn>
              </div>
          </div>
      </div>
  </header>
  <div :class="show ? 'active' : ''" class="menu-dim"></div>
  <!--2024.05.31 추가 -->

  <!--  전체메뉴 -->
  <v-dialog v-model="allmenu" class="menu-full-popup" fullscreen>
      <div class="allmenu">
          <div class="allmenu-inner">
              <div class="allmenu-head">
                  <div class="allmenu-login-wrap">
                          <ul class="login-txt-box">
                              <li>
                                  <RouterLink >
                                      <v-icon>icon-login</v-icon>
                                      로그인
                                  </RouterLink>
                              </li>
                              <li>
                                  <RouterLink >
                                      <v-icon>icon-join</v-icon>
                                      회원가입
                                  </RouterLink>
                              </li>
                          </ul>
                  </div>
              </div>
              <div class="allmenu-list-wrap">
                  <div class="allmenu-list">
                      <h2 class="title"><span>Data서비스</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink
                                  
                                  >Data상품
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink 
                                  >맞춤Data
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>솔루션서비스</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink
                                 
                                  >솔루션상품
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>광고서비스</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink 
                                  >타겟마케팅
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink 
                                  >모바일서베이
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink 
                                  >SOL페이배너광고
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>API서비스</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink
                                  >API상품
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>커뮤니티</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink
                                  >활용장
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink
                                  >토론장
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>DataBada</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink 
                                  >DataBada
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink 
                                  >신한 DataUniverse
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <div class="allmenu-list">
                      <h2 class="title"><span>MY</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink
                                  >MY계약
                              </RouterLink>
                          </li>
                          <!--  모바일경우 none 처리 -->
                          <div class="mo-customer">
                              <li class="item">
                                  <RouterLink
                                      >MY타겟마케팅
                                  </RouterLink>
                              </li>
                          </div>
                          <li class="item">
                              <RouterLink
                                  >관심상품
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink
                                  @click="allmenu = false"
                                  >MY문의
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink
                                  >알림
                              </RouterLink>
                          </li>
                      </ul>
                  </div>

                  <div class="allmenu-list mo-customer">
                      <!--  모바일경우 none 처리 -->
                      <h2 class="title"><span>고객센터</span></h2>
                      <ul class="dep1_list">
                          <li class="item">
                              <RouterLink 
                                  >공지사항
                              </RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink @click="allmenu = false">FAQ</RouterLink>
                          </li>
                          <li class="item">
                              <RouterLink @click="allmenu = false"
                                  >고객문의
                              </RouterLink>
                          </li>
                      </ul>
                  </div>
                  <ul class="customer-box">
                      <!--  모바일만 보임 -->
                      <li>
                          <RouterLink
                              class="notice"
                              @click="allmenu = false"
                              >공지사항
                          </RouterLink>
                      </li>
                      <li>
                          <RouterLink @click="allmenu = false">FAQ</RouterLink>
                      </li>
                      <li>
                          <RouterLink
                              class="customer-center"
                              @click="allmenu = false"
                              >고객문의
                          </RouterLink>
                      </li>
                  </ul>
              </div>
              <v-btn block class="btn-popup-close" @click="allmenu = false">
                  <span class="sr-only">닫기</span>
              </v-btn>
          </div>
      </div>
  </v-dialog>
</template>

<style scoped>
@import '../styles/header.css';
</style>
