<template>
    <div class="main-wrap">
        <div class="visual-layout-area">
            <!-- Key Visual -->
            <MainKeyVsl />
            <!-- PC전용 로그인 -->
            <div class="my-login-wrap pc-wrap">
                <!-- 개인화 영역 -->
                <MainPsnTrr />
                <!-- 활용장 -->
                <MainUseFld />
            </div>
        </div>
        <div class="main-search-wrap">
            <div class="main-search-inner">
                <div class="input-wrap">
                    <v-text-field
                        v-model="searchTerms"
                        clearable
                        color="primary"
                        hide-details="auto"
                        placeholder="상품명, 해시태그"
                        variant="outlined"
                        @keypress.enter="searchService"
                    ></v-text-field>
                    <v-btn block class="btn-search" @click="searchService">
                        <span class="sr-only">검색</span>
                    </v-btn>
                </div>
                <div class="hashtags">
                    <!-- 추천 검색어 -->
                    <MainRcmSch @select-event="selectTerms" />
                </div>
            </div>
        </div>

        <div class="visual-layout-area mobile-wrap">
            <div class="my-login-wrap">
                <!-- 개인화 영역 -->
                <MainPsnTrr />
                <!-- 활용장 -->
                <MainUseFld />
            </div>
        </div>
        <div class="main-card-wrap">
            <!-- 카드 -->
            <MainCard />
        </div>
        <div class="main-services-wrap">
            <h2 class="main-title"><span class="fw300">Most Popular</span><span class="fw700">Services</span></h2>
            <!-- MPS -->
            <MainMps />
        </div>
        <div class="main-special-wrap">
            <h2 class="main-title">
                <span>For Success</span>
                <span class="fw700">Special Know-how</span>
            </h2>
            <div class="main-special-inner">
                <RouterLink :to="{ name: 'cmntUses' }" class="banner-link">
                    <div class="banner">
                        <div class="category-title">리포트부터 Data 뉴스까지</div>
                        <div class="title">신한카드 Data 200% 활용법</div>
                        <div class="btn-area">
                            <span>활용장</span>
                            <v-icon>btn-main-arrow</v-icon>
                        </div>
                        <v-icon>icon-graph</v-icon>
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'servDataProdCont01' }" class="banner-link">
                    <div class="banner">
                        <div class="category-title">나에게 필요한 딱 그 Data!</div>
                        <div class="title">Data 맞춤 서비스</div>
                        <div class="btn-area">
                            <span>맞춤Data</span>
                            <v-icon>btn-main-arrow</v-icon>
                        </div>
                        <v-icon>icon-sawlike</v-icon>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="main-datable-wrap">
            <div class="main-datable-inner">
                <h2 class="main-title">
                    <span class="fw300">Value Together</span>
                    <span class="fw700">Shinhan Databiz</span>
                </h2>
            </div>
            <!-- Value Together -->
            <MainVlTg />
        </div>
        <div class="main-customer-wrap">
            <h2 class="main-title">
                <span class="fw300">Always Open</span>
                <span class="fw700">Customer Center</span>
            </h2>
            <div class="main-customer-inner">
                <div class="banner">
                    <RouterLink :to="{ name: 'cscQnaReg', params: { id: 'Q02' } }" class="banner-link">
                        <strong class="title">사업제휴</strong>
                        <div class="text">새로운 아이디어와<br />사업제안을 환영합니다.</div>
                        <div class="btn-area">
                            <span>제휴문의</span>
                            <v-icon>btn-main-arrow</v-icon>
                        </div>
                        <v-icon>icon-hand</v-icon>
                    </RouterLink>
                </div>
                <!-- 공지사항 -->
                <MainAnc />
            </div>
        </div>
    </div>
    <!-- 공지팝업 -->
    <MainPupAnc />
    <!-- 팝업 -->
    <BasePupAlert :dialog-info="mainPupAlertInfo" />
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'
import MainPupAnc from '@/components/main/MainPupAnc.vue'
import MainKeyVsl from '@/components/main/MainKeyVsl.vue'
import MainPsnTrr from '@/components/main/MainPsnTrr.vue'
import MainUseFld from '@/components/main/MainUseFld.vue'
import MainRcmSch from '@/components/main/MainRcmSch.vue'
import MainCard from '@/components/main/MainCard.vue'
import MainMps from '@/components/main/MainMps.vue'
import MainVlTg from '@/components/main/MainVlTg.vue'
import MainAnc from '@/components/main/MainAnc.vue'
import BasePupAlert from '@/components/base/BasePupAlert.vue'
import BasePupLoginConfirm from '@/components/base/BasePupLoginConfirm.vue'

//메타 정보
useMeta({
    title: '신한카드 DataBada (데이터바다)',
    description:
        '신한카드 DataBada(데이터바다)는 데이터, 솔루션, 광고, API 서비스를 제공하고 소통하는 데이터 마켓 플레이스입니다.',
    keywords:
        '신한카드, DataBada, 데이터바다, 신한카드 데이터, 데이터 구매, 데이터 분석, 소비 데이터, 카드 데이터, API, 빅데이터, Data Maket Place, 데이터 마켓 플레이스, 플랫폼',
    og: {
        type: 'website',
        title: '신한카드 DataBada (데이터바다)',
        description:
            '신한카드 DataBada(데이터바다)는 데이터, 솔루션, 광고, API 서비스를 제공하고 소통하는 데이터 마켓 플레이스입니다.',
        url: 'https://databada.shinhancard.com/',
        image: 'https://databada.shinhancard.com/OG_1.png'
    }
})

//라우터 정보 객체
const router = useRouter()

//메인 팝업 정보 객체
let mainPupLoginConfirmInfo = reactive({
    toggle: false,
    id: null,
    password: null
})

//메인 팝업 정보 객체
let mainPupAlertInfo = reactive({
    toggle: false,
    text: '검색어를 입력해 주세요.',
    url: ''
})

//검색어
const searchTerms = ref(null)

/**
 * 추천 검색어 선택
 *
 * 추천 검색어 선택 시 검색어로 세팅한다.
 */
const selectTerms = (terms) => {
    searchTerms.value = terms
}

/**
 * 서비스 검색
 *
 * 1. 검색어 미입력 시 팝업을 호출한다.
 * 2. state를 통해 검색 페이지에 검색어를 전달한다.
 */
const searchService = () => {
    if (!searchTerms.value) {
        //검색어 미입력
        mainPupAlertInfo.toggle = true
    } else {
        //서비스 검색 호출
        router.push({ name: 'search', state: { searchParams: { q: searchTerms.value } } })
    }
}
</script>
