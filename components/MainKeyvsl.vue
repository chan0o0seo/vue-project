<template>
    <div class="main-visual-wrap">
        <swiper :autoplay="{
            delay: 2500,
            disableOnInteraction: false
        }" :effect="'fade'" :fadeEffect="{
            crossFade: true
        }" :loop="loop" :modules="[Autoplay, EffectFade, Pagination, Navigation]" :navigation="navigation"
            :pagination="pagination" :speed="1000">
            <template v-for="item in items">
                <swiper-slide>
                    <template v-if="item.link">
                        <a :href="item.link" class="block-all" href="javascript:;">
                            <div :style="{ backgroundColor: `#${item.bgColor ? item.bgColor : 'eee'}` }"
                                class="main-visual-list">
                                <div class="visual-txt-area">
                                    <span class="visual-stit">{{ item.title }}</span>
                                    <p class="visual-title">
                                        <span>{{ item.content1 }}</span><br />
                                        <span>{{ item.content2 }}</span><br />
                                        <span>{{ item.content3 }}</span>
                                    </p>
                                    <template v-if="item.linkText">
                                        <span class="visual-more"><span>{{ item.linkText
                                                }}</span><v-icon>icon-card-arrow</v-icon></span>
                                    </template>
                                </div>
                                <div class="visual-img">
                                    <template v-if="item.pcImgPath">
                                    </template>
                                    <template v-if="item.mobileImgPath">
                                    </template>
                                </div>
                            </div>
                        </a>
                    </template>
                    <template v-else>
                        <div class="block-all">
                            <div :style="{ backgroundColor: `#${item.bgColor ? item.bgColor : 'eee'}` }"
                                class="main-visual-list">
                                <div class="visual-txt-area">
                                    <span class="visual-stit">{{ item.title }}</span>
                                    <p class="visual-title">
                                        <span>{{ item.content1 }}</span><br />
                                        <span>{{ item.content2 }}</span><br />
                                        <span>{{ item.content3 }}</span>
                                    </p>
                                    <template v-if="item.linkText">
                                        <span class="visual-more"><span>{{ item.linkText }}</span></span>
                                    </template>
                                </div>
                                <div class="visual-img">
                                    <template v-if="item.pcImgPath">
                                        <img :src="commonUtil.getImageUrl(`${item.pcImgPath}`)" alt="" class="pc-img" />
                                    </template>
                                    <template v-if="item.mobileImgPath">
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </swiper-slide>
            </template>
        </swiper>
        <div class="indicator-wrap">
            <div ref="paginationRef" class="slide-pagination type-num"></div>
            <button ref="prevEl" class="btn-main-prev" type="button"><span class="sr-only">이전</span></button>
            <button ref="nextEl" class="btn-main-next" type="button"><span class="sr-only">다음</span></button>
        </div>
    </div>
</template>

<script setup>
//STR: Public
/**
 * Key Visual 조회
 *
 * 메인 Key Visual 영역에 사용할 Key Visual을 조회한다.
 */
const inquiryKeyVisual = async () => {
    //API: Key Visual 조회
    const data = await api.mainKeyvisualList()

    if (data.success) {
        //Key Visual 추가
        items.push(...data.results.list)
        //스와퍼 반복 시작
        if (items.length > 1) {
            loop.value = true
        }
    } else {
        //Key Visual 초기화
        items.splice(0)
        //스와퍼 반복 중지
        loop.value = false
    }
}

/**
 * 컴포넌트 마운트
 *
 * Key Visual 정보를 조회한다.
 */
</script>
