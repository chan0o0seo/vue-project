<template>
    <div class="sub-group data-service">
        <div class="sub-title-area">
            <h4 class="sub-title">API상품</h4>
        </div>

        <!-- 상품 카드 -->
        <ServPdDetlCrd :prodInfo="prodInfo" />
        <!--// 상품 카드 -->

        <!-- 상품 상세 -->
        <div class="product-detail">
            <!-- 상품정보 -->
            <ServPdDetlInfo :prodInfo="prodInfo" />
            <!--// 상품정보 -->

            <!-- 데이터정보 -->
            <template
                v-if="
                    prodInfo.productDataInfo && (prodInfo.productTypeCode == '01' || prodInfo.productTypeCode == '03')
                "
            >
                <ServPdDetlData :daIfGrid="JSON.parse(prodInfo.productDataInfo).daIfGrid" />
            </template>
            <!--// 데이터정보 -->

            <!-- API 정보 -->
            <template
                v-if="prodInfo.productApiInfo && (prodInfo.productTypeCode == '02' || prodInfo.productTypeCode == '03')"
            >
                <ServPdDetlApi :apiIfGrid="JSON.parse(prodInfo.productApiInfo).apiIfGrid" />
            </template>
            <!--// API 정보 -->

            <!-- 신한GPT -->
            <template v-if="false && prodInfo.productGtpQna1">
                <!-- 백엔드 API 개발/테스트후 사용예정(현재 미개발됨, 서비스오픈제외, 2024.06.17) ServPdDetlGpt-->
            </template>
            <!--// 신한GPT -->

            <!-- 활용사례 -->
            <ServPdDetlPusEx :prodInfo="prodInfo" />
            <!--// 활용사례 -->

            <!-- 맞춤Dta -->
            <v-divider class="divide" />
            <ServPdDetlCmzDt />
            <!--// 맞춤Dta -->

            <!-- 추천상품 -->
            <ServPdDetlRcmPd :prodInfo="prodInfo" />
            <!--// 추천상품 -->
        </div>
        <!--// 상품 상세 -->

        <div class="btn-list">
            <v-btn
                color="primary"
                rounded="lg"
                size="x-large"
                variant="flat"
                @click="[(historyStore.state[keySet]['action'] = 'init'), $router.push({ name: keySet })]"
                >목록
            </v-btn>
        </div>
    </div>
    <!-- 팝업 -->
    <BasePupAlert :dialog-info="basePupAlertInfo" @confirm-event="movePage" />
    <!-- 토스트팝업 -->
    <BaseSnackBar />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
//import { decode } from 'html-entities'

//라우터 정보 객체
const router = useRouter()

//로그인 저장소 정보 객체
const authStore = useAuthStore()

//이력 저장소 정보 객체
const historyStore = useHistoryStore()

//이력 저장소 정보 생성
const keySet = historyStore.createHistoryStore()

//로그인여부 정보 객체
const isLogin = authStore.isLogin()

//기본 팝업 정보 객체
let basePupAlertInfo = reactive({
    toggle: false,
    text: '로그인 후 관심상품으로 저장 가능합니다.',
    url: ''
})

//관심상품 토글
const toggle = ref(false)

//분석 타입 색상 클래스
const analysisClass = ['', 'blue', 'violet', 'green', 'yellow', 'pink']

//상품ID 객체
const productId = router.currentRoute.value.params.id

//상품 상세 정보 객체
const prodInfo = ref({
    productTypeCode: '',
    productTypeNm: '',
    originProductId: '',
    originProductNm: '',
    productId: '',
    productNm: '',
    productDesc: '',
    analysisTypeCodeList: '',
    productTagList: '',
    productNew: '',
    productHot: '',
    productPick: '',
    productIconImgPath: '',
    linkPopupYn: '',
    productLink: '',
    productEtcLink: '',
    productInfo1: '',
    productInfoImgPath1: '',
    productInfo2: '',
    productInfoImgPath2: '',
    productFileList: '',
    productDataCycle: '',
    productDataExt: '',
    productDataMethod: '',
    productDataInfo: '',
    productApiInfo: '',
    productApiInfoDetail: 'not use',
    productApiYn: '',
    productGtpFileList: '',
    productGtpQna1: '',
    productGtpQna2: '',
    productGtpQna3: '',
    productRecommendList: '',
    productUseCase1: '',
    productUseCaseImgPath1: '',
    productUseCase2: '',
    productUseCaseImgPath2: '',
    userConsentYn: ''
})

/**
 * 상품 상세 조회
 *
 * 상품 상세를 가져온다.
 */
const getPrdDetail = async () => {
    //상품 상세 조회
    const data = await api.inquiryPrdDetail(productId)

    //응답 값이 성공일 경우
    if (data.success) {
        //상품 상세 정보 저장
        prodInfo.value.productTypeCode = data.results.productTypeCode
        prodInfo.value.productTypeNm = data.results.productTypeNm
        prodInfo.value.originProductId = data.results.originProductId
        prodInfo.value.originProductNm = data.results.originProductNm
        prodInfo.value.productId = data.results.productId
        prodInfo.value.productNm = data.results.productNm
        prodInfo.value.productDesc = data.results.productDesc
        prodInfo.value.analysisTypeCodeList = data.results.analysisTypeCodeList
        prodInfo.value.productTagList = data.results.productTagList
        prodInfo.value.productNew = data.results.productNew
        prodInfo.value.productHot = data.results.productHot
        prodInfo.value.productPick = data.results.productPick
        prodInfo.value.productIconImgPath = data.results.productIconImgPath
        prodInfo.value.linkPopupYn = data.results.linkPopupYn
        prodInfo.value.productLink = data.results.productLink
        prodInfo.value.productEtcLink = data.results.productEtcLink
        prodInfo.value.productInfo1 = decode(data.results.productInfo1)
        prodInfo.value.productInfoImgPath1 = data.results.productInfoImgPath1
        prodInfo.value.productInfo2 = decode(data.results.productInfo2)
        prodInfo.value.productInfoImgPath2 = data.results.productInfoImgPath2
        prodInfo.value.productFileList = data.results.productFileList
        prodInfo.value.productDataCycle = data.results.productDataCycle
        prodInfo.value.productDataExt = data.results.productDataExt
        prodInfo.value.productDataMethod = data.results.productDataMethod
        prodInfo.value.productDataInfo = data.results.productDataInfo
        prodInfo.value.productApiInfo = data.results.productApiInfo
        prodInfo.value.productApiInfoDetail = data.results.productApiInfoDetail
        prodInfo.value.productApiYn = data.results.productApiYn
        prodInfo.value.productGtpFileList = data.results.productGtpFileList
        prodInfo.value.productGtpQna1 = data.results.productGtpQna1
        prodInfo.value.productGtpQna2 = data.results.productGtpQna2
        prodInfo.value.productGtpQna3 = data.results.productGtpQna3
        prodInfo.value.productRecommendList = data.results.productRecommendList
        prodInfo.value.productUseCase1 = decode(data.results.productUseCase1)
        prodInfo.value.productUseCaseImgPath1 = data.results.productUseCaseImgPath1
        prodInfo.value.productUseCase2 = decode(data.results.productUseCase2)
        prodInfo.value.productUseCaseImgPath2 = data.results.productUseCaseImgPath2
        prodInfo.value.userConsentYn = data.results.userConsentYn

        if (prodInfo.value.productPick === 'Y') {
            toggle.value = true
        } else {
            toggle.value = false
        }
    }
    //아닐 경우
    else {
        //상품 상세정보 초기화
        prodInfo.value = {}
        basePupAlertInfo.toggle = true
        basePupAlertInfo.text = '상품정보를 가져올 수 없습니다. 관련하여 상품정보를 원하시면 문의하여 주시기 바랍니다.'
        basePupAlertInfo.url = 'servApisProdSrch'
    }
}

//페이지 이동
const movePage = (url) => {
    if (url) {
        router.push({ name: url })
    }
}

/**
 * 마운트 후
 *
 * 상품상세정보와 조회카운트 처리
 */
onMounted(() => {
    getPrdDetail()
})
</script>
