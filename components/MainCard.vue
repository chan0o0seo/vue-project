<template>
    <div class="main-card-inner">
        <v-btn :to="{ name: 'servDataProdSrch' }" class="card-box">
            <div class="title-area">
                <span class="card-stit">다양한</span>
                <strong class="card-title">Data서비스</strong>
            </div>
            <v-icon class="card-icon ico-main-data"></v-icon>
            <span class="card-text">Data One-Stop Service</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn :to="{ name: 'servSltnProdSrch' }" class="card-box">
            <div class="title-area">
                <span class="card-stit">혁신적인</span>
                <strong class="card-title">솔루션서비스 </strong>
            </div>
            <v-icon class="card-icon ico-main-solution"></v-icon>
            <span class="card-text">상권분석, 시장 모니터링</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn :to="{ name: 'servAdvtProdCont01' }" class="card-box">
            <div class="title-area">
                <span class="card-stit">스마트한</span>
                <strong class="card-title">광고서비스 </strong>
            </div>
            <v-icon class="card-icon ico-main-ad"></v-icon>
            <span class="card-text">최적의 고객 타겟팅</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn :to="{ name: 'servApisProdSrch' }" class="card-box">
            <div class="title-area">
                <span class="card-stit">탁월한</span>
                <strong class="card-title">API서비스</strong>
            </div>
            <v-icon class="card-icon ico-main-api"></v-icon>
            <span class="card-text">Data 실시간 활용</span>
            <v-icon>icon-card-arrow</v-icon>
        </v-btn>
    </div>
</template>
