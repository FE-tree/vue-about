<template>
    <div class="img-list">
        <div class="img-item" v-for="(item, i) in types" :key="i">
            <figure :class="`filter-${item}`">
                <img src="../assets/instagram.jpg">
            </figure>
            <p v-if="i==0">Normal</p>
            <p v-else>filter-{{ item }}</p>
        </div>
        <!--<div class="img-item">-->
            <!--<figure class="filter-1977">-->
                <!--<img src="../assets/instagram.jpg">-->
            <!--</figure>-->
            <!--<p>filter-1977</p>-->
        <!--</div>-->
        <!--<div class="img-item">-->
            <!--<figure class="filter-aden">-->
                <!--<img src="../assets/instagram.jpg">-->
            <!--</figure>-->
            <!--<p>filter-aden</p>-->
        <!--</div>-->
        <!--<div class="img-item">-->
            <!--<figure class="filter-amaro">-->
                <!--<img src="../assets/instagram.jpg">-->
            <!--</figure>-->
            <!--<p>filter-amaro</p>-->
        <!--</div>-->
    </div>
</template>

<!--
1977 filter-1977
Aden filter-aden
Amaro filter-amaro
Ashby filter-ashby
Brannan filter-brannan
Brooklyn filter-brooklyn
Charmes filter-charmes
Clarendon filter-clarendon
Crema filter-crema
Dogpatch filter-dogpatch
Earlybird filter-earlybird
Gingham filter-gingham
Ginza filter-ginza
Hefe filter-hefe
Helena filter-helena
Hudson filter-hudson
Inkwell filter-inkwell
Kelvin filter-kelvin
Kuno filter-juno
Lark filter-lark
Lo-Fi filter-lofi
Ludwig filter-ludwig
Maven filter-maven
Mayfair filter-mayfair
Moon filter-moon
Nashville filter-nashville
Perpetua filter-perpetua
Poprocket filter-poprocket
Reyes filter-reyes
Rise filter-rise
Sierra filter-sierra
Skyline filter-skyline
Slumber filter-slumber
Stinson filter-stinson
Sutro filter-sutro
Toaster filter-toaster
Valencia filter-valencia
Vesper filter-vesper
Walden filter-walden
Willow filter-willow
X-Pro II filter-xpro-ii
-->

<script>
    export default {
        name: "instagram",
        data() {
            return {
                types: ['','1977', 'aden', 'amaro', 'ashby', 'brannan', 'brooklyn', 'charmes', 'clarendon', 'crema', 'dogpatch',
                    'earlybird', 'gingham', 'ginza', 'hefe', 'helena', 'hudson', 'inkwell', 'kelvin', 'juno', 'lark', 'lofi',
                    'ludwig', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua', 'poprocket', 'reyes', 'rise', 'sierra',
                    'skyline', 'slumber', 'stinson', 'sutro', 'toaster', 'valencia', 'vesper', 'walden', 'willow', 'xpro-ii']
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/instagram.css";
    .img-list {
        width: 100%;
        .img-item {
            text-align: center;
            float: left;
            /*width: 50%;*/
        }
    }
</style>